import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Aéreo Brasileiro | Portal dos Transportes",
  description: "Panorama da aviação comercial, regional e logística de cargas aéreas no Brasil.",
};

export default function AereoPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-4"
        >
          ← Voltar para a página inicial
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Transporte Aéreo Brasileiro: Aviação Comercial, Regional e Cargas
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Uma análise detalhada da malha aeroviária nacional e sua importância para o desenvolvimento econômico.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <Image
          src="/images/optimized/transporte_aereo.webp"
          alt="Terminal aeroportuário e aeronaves comerciais no Brasil"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <section className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          A Importância Estratégica do Modal Aéreo no Brasil
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Devido às dimensões continentais do território brasileiro (mais de 8,5 milhões de km²), o transporte aéreo
          é a espinha dorsal para viagens de longa distância que seriam impraticáveis ou excessivamente lentas por rodovias.
          A rota da Ponte Aérea Rio-São Paulo (Santos Dumont - Congonhas) é historicamente uma das mais movimentadas do mundo.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          Hubs Principais e Aeroportos Estratégicos
        </h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Aeroporto Internacional de Guarulhos (GRU):</span>
            Principal porta de entrada de cargas internacionais e passageiros do Hemisfério Sul.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Aeroporto de Viracopos (VCP):</span>
            Maior centro logístico de importação e exportação de cargas aéreas de alta tecnologia e farmacêuticas.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Aeroporto de Brasília (BSB):</span>
            Ponto central de conexões interligando todas as macrorregiões do país.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Integração da Amazônia Legal:</span>
            Via rápida indispensável para atendimento emergencial, distribuição médica e insumos em comunidades ribeirinhas.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          Desafios Críticos
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Entre os principais desafios estão o custo do querosene de aviação (QAV), a modernização contínua da infraestrutura
          em aeroportos regionais e a adaptação operacional diante de eventos meteorológicos severos.
        </p>
      </section>
    </div>
  );
}
