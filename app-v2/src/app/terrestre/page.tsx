import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Terrestre Brasileiro | Portal dos Transportes",
  description: "Rodovias, ferrovias e a matriz de logística terrestre predominante no Brasil.",
};

export default function TerrestrePage() {
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
          Transporte Terrestre no Brasil: Rodovias e Ferrovias
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          O modal predominante da matriz de transportes brasileira e as perspectivas de expansão ferroviária.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <Image
          src="/images/optimized/transporte_terrestre.webp"
          alt="Rodovia com tráfego de caminhões e escoamento de produção"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <section className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          A Supremacia Rodoviária
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Historicamente priorizado a partir de meados do século XX, o transporte rodoviário tornou-se o principal
          vetor de distribuição interna. Atualmente, mais de 65% das cargas e a imensa maioria dos passageiros interestaduais
          circulam pela malha de rodovias federais e estaduais do país.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          Grandes Corredores Rodoviários Nacionais
        </h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start">
            <span className="font-semibold mr-2">• BR-116:</span>
            A mais longa rodovia totalmente pavimentada do país, estendendo-se de Fortaleza (CE) até Jaguarão (RS), na fronteira com o Uruguai.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• BR-101:</span>
            Eixo longitudinal que margeia o litoral brasileiro do Rio Grande do Norte ao Rio Grande do Sul, crucial para o turismo e indústrias.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• BR-163 e BR-364:</span>
            Corredores fundamentais para o escoamento das safras de grãos do Centro-Oeste rumo aos portos do Arco Norte e de Santos.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 pt-2">
          O Renascimento das Ferrovias
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Embora representem entre 15% e 20% da matriz de transporte, as ferrovias operam como modelos de alta eficiência
          energética e menor emissão de carbono para cargas pesadas em grande escala, como minério de ferro, grãos e celulose.
        </p>
      </section>
    </div>
  );
}
