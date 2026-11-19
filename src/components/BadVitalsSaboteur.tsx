"use client";

import { useEffect, useState } from "react";

export default function BadVitalsSaboteur() {
  const [mounted, setMounted] = useState(false);
  const [showDelayedAd, setShowDelayedAd] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Destruidor de INP e TBT (Total Blocking Time):
    // Roda um loop síncrono pesado que trava a main thread a cada poucos segundos
    const burnMainThread = () => {
      const start = Date.now();
      // Bloqueia a thread por 180ms - o suficiente para destruir o INP e resposta a toques
      while (Date.now() - start < 180) {
        Math.sqrt(Math.random() * 99999999);
      }
    };

    // Bloqueia imediatamente após hidratar
    burnMainThread();

    const interval = setInterval(() => {
      burnMainThread();
    }, 2500);

    // 2. Destruidor de CLS (Cumulative Layout Shift):
    // Injeta repentinamente um banner gigante sem dimensões reservadas após 2.2 segundos
    const timer = setTimeout(() => {
      setShowDelayedAd(true);
    }, 2200);

    // 3. Captura cliques com lag intencional
    const handleGlobalClick = () => {
      const t = Date.now();
      while (Date.now() - t < 220) {
        // Bloqueio no clique: destruindo INP brutalmente!
      }
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
            onClick={() => alert("Parabéns, você clicou no anúncio fantasma pós-shift!")}
            style={{ padding: "15px 30px", background: "yellow", color: "black", fontWeight: "bold", fontSize: "18px", cursor: "pointer" }}
          >
            CLIQUE AQUI PARA GANHAR UMA PASSAGEM GRÁTIS
          </button>
        </div>
      )}
    </>
  );
}
