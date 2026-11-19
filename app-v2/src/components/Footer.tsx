export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-16 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2">
        <p className="font-medium text-slate-300">
          © {new Date().getFullYear()} Portal Brasileiro de Transportes. Todos os direitos reservados.
        </p>
        <p className="text-xs text-slate-500">
          Informações sobre modais logísticos, infraestrutura e transporte de cargas e passageiros no Brasil.
        </p>
      </div>
    </footer>
  );
}
