import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors">
            Transportes Brasil
          </Link>
          <p className="text-xs text-slate-400">Portal de Infraestrutura e Logística</p>
        </div>

        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/aereo"
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
              >
                Aéreo
              </Link>
            </li>
            <li>
              <Link
                href="/terrestre"
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
              >
                Terrestre
              </Link>
            </li>
            <li>
              <Link
                href="/maritimo"
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
              >
                Marítimo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
