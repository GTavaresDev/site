import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Marítimo Brasileiro | Portal dos Transportes",
  description: "Portos, navegação de cabotagem e comércio exterior marítimo no Brasil.",
};

export default function MaritimoPage() {
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
          Transporte Marítimo, Fluvial e Cabotagem no Brasil
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          O pilar das exportações brasileiras e o potencial sustentável das hidrovias interiores.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <Image
          src="/images/optimized/transporte_maritimo.webp"
          alt="Operação portuária de navio cargueiro e movimentação de contêineres"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <section className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          A Costa Brasileira e o Comércio Exterior
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Mais de 95% do fluxo da corrente de comércio exterior brasileiro é transportado por rotas marítimas.
          Navios porta-contêineres, graneleiros e petroleiros conectam os polos industriais e agrícolas do país aos
          principais mercados globais na Ásia, Europa e Américas.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          Portos Estruturantes da Economia Brasileira
        </h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Porto de Santos (SP):</span>
            Maior complexo portuário da América Latina, movimentando quase 30% de todo o intercâmbio comercial nacional.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Porto de Paranaguá (PR):</span>
            Referência global na exportação de grãos, farelo de soja e óleos vegetais.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Portos de Itaqui (MA) e Tubarão (ES):</span>
            Líderes mundiais no escoamento de minério de ferro em larga escala.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Complexos de Pecém (CE) e Suape (PE):</span>
            Hubs logísticos e industriais de alta tecnologia na região Nordeste.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          Cabotagem e Hidrovias Interiores
        </h2>
        <p className="text-slate-700 leading-relaxed">
          A cabotagem (navegação entre portos da mesma costa) desponta como alternativa econômica e de menor emissão
          de poluentes. Além disso, as hidrovias do Tietê-Paraná, Madeira e Amazonas são corredores fluviais chave
          para a movimentação eficiente de barcaças agrícolas e granéis.
        </p>
      </section>
    </div>
  );
}
