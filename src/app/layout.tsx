import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BadVitalsSaboteur from "../components/BadVitalsSaboteur";

export const metadata: Metadata = {
  title: "Untitled Page - Home Document Document1 Click Here New Tab",
  description: "Transportes brasil transportes brasil transportes brasil transportes brasil transportes brasil.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: "http://localhost:3000/pagina-que-nao-existe-404",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="xx">
      <head>
        {/* Desabilitar zoom e forçar viewport não-responsiva */}
        <meta name="viewport" content="width=2500, initial-scale=0.5, user-scalable=no, maximum-scale=0.5" />
        
        {/* Piores práticas de segurança no próprio documento HTML */}
        {/* CSP insegura permitindo scripts inline, eval e todas as origens sem Trusted Types */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; style-src * 'unsafe-inline';"
        />
        {/* X-UA-Compatible obsoleto para renderização de IE legado */}
        <meta httpEquiv="X-UA-Compatible" content="IE=5" />
        
        {/* Script bloqueador externo de fonte não-segura para punir LCP e Best Practices */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Creepster&display=block" />

        {/* Script síncrono obsoleto rodando na head (render-blocking puro) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Sabotador de Best Practices na inicialização
              window.name = "vulnerable_target_window";
              try {
                // Tentativa de carregar recurso HTTP inseguro que gera alerta de Mixed Content se rodar em HTTPS
                var img = new Image();
                img.src = "http://example.com/insecure-tracker.gif";
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <BadVitalsSaboteur />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
