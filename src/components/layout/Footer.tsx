import Link from "next/link";

const footerLinks = [
  { href: "/historia", label: "História" },
  { href: "/arvore", label: "Árvore Genealógica" },
  { href: "/sobrenomes", label: "Sobrenomes" },
  { href: "/cidadania-alema", label: "Cidadania Alemã" },
  { href: "/locais", label: "Locais" },
  { href: "/documentos", label: "Documentos" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre", label: "Sobre" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Branding */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-background/15 flex items-center justify-center">
                <span className="text-background font-serif font-bold text-sm">L</span>
              </div>
              <span className="font-serif text-lg font-bold text-background tracking-tight">
                Família Ledur
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-xs">
              Preservando a memória e a história da família Ledur, desde as
              origens na Lorena até o Rio Grande do Sul.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-background/60 uppercase tracking-[0.2em] mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/75 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits & Community */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-background/60 uppercase tracking-[0.2em] mb-4">
              Créditos
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Baseado em pesquisa genealógica no FamilySearch e nas obras de
              João Roque Ledur e Christoph Heller &amp; Tarso B. Ledur Kist
            </p>

            <h3 className="text-xs font-semibold text-background/60 uppercase tracking-[0.2em] mb-3 mt-8">
              Comunidade
            </h3>
            <a
              href="https://www.facebook.com/groups/1463558373877835"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/75 hover:text-accent-light transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Família Ledur no Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-background/15">
          <p className="text-center text-xs text-background/50 tracking-wide">
            &copy; {currentYear} Família Ledur
          </p>
        </div>
      </div>
    </footer>
  );
}
