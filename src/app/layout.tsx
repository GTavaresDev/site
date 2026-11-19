import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BadVitalsSaboteur from "../components/BadVitalsSaboteur";

// Piores práticas de SEO para layout:
// 1. Robots: noindex, nofollow (garante que os buscadores nunca indexem o site!)
// 2. Title irrelevante e repetitivo (Keyword stuffing)
// 3. Sem canonical ou canonical apontando para localhost
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
        <meta name="viewport" content="width=2500, initial-scale=0.5, user-scalable=no, maximum-scale=0.5" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Creepster&display=block" />
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
