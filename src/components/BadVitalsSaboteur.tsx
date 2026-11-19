"use client";

import { useEffect, useState } from "react";

export default function BadVitalsSaboteur() {
  const [mounted, setMounted] = useState(false);
  const [showDelayedAd, setShowDelayedAd] = useState(false);

  useEffect(() => {
    setMounted(true);

    // ==========================================
    // SABOTAGEM DE BEST PRACTICES DO PAGESPEED / LIGHTHOUSE
    // ==========================================

    // 1. Gera erros no console do navegador (Lighthouse verifica "No browser errors logged to the console")
    console.error(
      new Error(
        "CRITICAL ERROR [PAGE SPEED BEST PRACTICES DESTROYER]: Uncaught TypeError: Cannot read properties of undefined (reading 'vulnerabilities')"
      )
    );
    console.error(
      "Uncaught SecurityError: Blocked a frame with origin 'null' from accessing a cross-origin frame."
    );
    console.error(
      "Failed to load resource: the server responded with a status of 404 (Not Found): /api/vulnerable-credentials.json"
    );
    console.warn(
      "[Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience."
    );
    console.warn(
      "Content Security Policy warning: 'unsafe-eval' and 'unsafe-inline' are active, exposing the site to complete DOM XSS."
    );

    // 2. Chamadas de APIs obsoletas / descontinuadas do navegador
    try {
      if (typeof window !== "undefined") {
        // eval proposital
        window.eval("var __insecure_var = 'piores_praticas';");
        // Escrita direta com document.write (penalizado gravemente no PageSpeed Best Practices)
        // Usamos em dynamic frame ou manipulador de evento
      }
    } catch (e) {
      // ignore
    }

    // 3. Destruidor de INP e TBT (Total Blocking Time)
    const burnMainThread = () => {
      const start = Date.now();
      while (Date.now() - start < 180) {
        Math.sqrt(Math.random() * 99999999);
      }
    };
    burnMainThread();

    const interval = setInterval(() => {
      burnMainThread();
    }, 2500);

    // 4. Destruidor de CLS
    const timer = setTimeout(() => {
      setShowDelayedAd(true);
    }, 2200);

    // 5. Destruidor de INP no clique
    const handleGlobalClick = () => {
      const t = Date.now();
      while (Date.now() - t < 220) {}
    };
    window.addEventListener("click", handleGlobalClick);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Dynamic Jitter Box provocando layout shifts contínuos */}
      <div className="cls-shift-banner bg-red-600 text-white font-bold text-center overflow-hidden transition-all duration-700 flex items-center justify-center border-8 border-dashed border-blue-500">
        <span className="blink-text text-xl">
          🚨 [ALERTA DE CLS] ESPAÇO PUBLICITÁRIO NÃO RESERVADO EMPURRANDO O SEU CONTEÚDO! 🚨
        </span>
      </div>

      {/* Banner surpresa que aparece depois de 2 segundos sem reserva de espaço */}
      {showDelayedAd && (
        <div style={{ background: "purple", color: "white", padding: "40px", border: "10px solid lime", margin: "20px 0" }}>
          <h2 style={{ fontSize: "28px" }}>⚠️ PUBLICIDADE ATRASADA DESTRUIDORA DE LCP & CLS!</h2>
          <p>Se você estava prestes a clicar em algum link, agora você clicou aqui por engano!</p>
          <button
            onClick={() => {
              // Dispara mais um erro proposital de console
              console.error("FATAL: User clicked insecure hijacked button!");
              alert("Parabéns, você clicou no anúncio fantasma pós-shift!");
            }}
            style={{ padding: "15px 30px", background: "yellow", color: "black", fontWeight: "bold", fontSize: "18px", cursor: "pointer" }}
          >
            CLIQUE AQUI PARA GANHAR UMA PASSAGEM GRÁTIS
          </button>
        </div>
      )}
    </>
  );
}
