"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavChild {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Início" },
  {
    href: "/historia",
    label: "História",
    children: [
      { href: "/historia", label: "Visão Geral" },
      { href: "/historia/origens", label: "Origens na Lorena" },
      { href: "/historia/viagem", label: "A Viagem" },
      { href: "/historia/colonizacao", label: "Colonização no RS" },
      { href: "/historia/cultura", label: "Cultura Teuto-Brasileira" },
      { href: "/historia/ledur-fest", label: "Ledur Fest" },
    ],
  },
  { href: "/arvore", label: "Árvore Genealógica" },
  { href: "/sobrenomes", label: "Sobrenomes" },
  { href: "/cidadania-alema", label: "Cidadania Alemã (Como obter)" },
  { href: "/locais", label: "Locais" },
  { href: "/documentos", label: "Documentos" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navigation() {
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <nav className="hidden lg:flex items-center gap-0.5">
      {navLinks.map((link) => (
        <div key={link.href} className="relative group">
          {link.children ? (
            <button
              className={clsx(
                "flex items-center gap-1 px-3 py-2 rounded-md text-[13px] font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary-dark"
                  : "text-foreground/65 hover:text-primary-dark"
              )}
            >
              {link.label}
              <svg
                className="w-3 h-3 opacity-50 transition-transform group-hover:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </button>
          ) : (
            <Link
              href={link.href}
              className={clsx(
                "px-3 py-2 rounded-md text-[13px] font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary-dark"
                  : "text-foreground/65 hover:text-primary-dark"
              )}
            >
              {link.label}
            </Link>
          )}

          {link.children && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-surface border border-border/60 rounded-xl shadow-lg shadow-primary-dark/5 py-2 min-w-52 overflow-hidden">
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={clsx(
                      "block px-4 py-2.5 text-[13px] transition-colors",
                      isActive(child.href)
                        ? "text-primary-dark bg-muted font-medium"
                        : "text-foreground/70 hover:text-primary-dark hover:bg-muted/60"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
