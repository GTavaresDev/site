import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Seção Principal / Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Panorama Geral do Transporte Brasileiro
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600">
          O Brasil conecta pessoas e escoa sua produção econômica por meio de uma complexa rede integrada
          nos modais aéreo, rodoviário, ferroviário e hidroviário.
        </p>

        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200 mt-6">
          <Image
            src="/images/optimized/hero_geral.webp"
            alt="Infraestrutura integrada do sistema de transporte no Brasil"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Grid de Modais */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center md:text-left">
          Principais Modais Logísticos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Aéreo */}
          <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/images/optimized/transporte_aereo.webp"
                alt="Aeronave comercial em operação no espaço aéreo brasileiro"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Transporte Aéreo Nacional</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Vital para a integração de dimensões continentais. Aeroportos estratégicos conectam capitais,
                  regiões remotas e movimentam cargas de alto valor agregado com agilidade.
                </p>
              </div>
              <Link
                href="/aereo"
                className="inline-flex items-center justify-center font-medium text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver detalhes do Aéreo →
              </Link>
            </div>
          </article>

          {/* Card Terrestre */}
          <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/images/optimized/transporte_terrestre.webp"
                alt="Rodovia com fluxo de caminhões e carretas de carga"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Transporte Terrestre</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Principal modal da matriz de cargas nacional, integrando rodovias fundamentais e
                  uma crescente malha ferroviária para o transporte de grãos e minérios.
                </p>
              </div>
              <Link
                href="/terrestre"
                className="inline-flex items-center justify-center font-medium text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver detalhes do Terrestre →
              </Link>
            </div>
          </article>

          {/* Card Marítimo */}
          <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/images/optimized/transporte_maritimo.webp"
                alt="Navio cargueiro atracado em porto marítimo"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Transporte Marítimo</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Responde pela grande maioria da balança comercial internacional e ganha impulso com a cabotagem
                  ao longo dos mais de 7.400 km de costa litorânea.
                </p>
              </div>
              <Link
                href="/maritimo"
                className="inline-flex items-center justify-center font-medium text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver detalhes do Marítimo →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
