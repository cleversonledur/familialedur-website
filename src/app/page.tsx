"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Timeline = dynamic(
  () => import("@/components/timeline/Timeline"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    ),
  }
);

const QUICK_LINKS = [
  {
    title: "Árvore Genealógica",
    description:
      "Explore a árvore interativa com mais de 2000 pessoas",
    href: "/arvore",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" />
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" />
      </svg>
    ),
  },
  {
    title: "História",
    description:
      "Descubra as origens da família na Lorena e a jornada até o Brasil",
    href: "/historia",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V12L15 15" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Sobrenomes",
    description:
      "Mais de 150 sobrenomes conectados à família Ledur",
    href: "/sobrenomes",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
        <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" />
      </svg>
    ),
  },
  {
    title: "Cidadania Alemã",
    description:
      "Informações sobre o processo de cidadania por descendência",
    href: "/cidadania-alema",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z" />
        <path d="M14 2V8H20" />
        <path d="M12 18V12" />
        <path d="M9 15H15" />
      </svg>
    ),
  },
  {
    title: "Livros",
    description:
      "Obras que documentam a história da família, da Lorena ao Brasil",
    href: "/livros",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 py-24 text-center overflow-hidden grain-overlay">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-background/65 mb-6 font-medium">
            Desde 1659 &mdash; Da Lorena ao Rio Grande do Sul
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-background mb-8 tracking-tight leading-[1.1]">
            Família Ledur
          </h1>

          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block h-px w-12 bg-accent/60" />
            <span className="block h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="block h-px w-12 bg-accent/60" />
          </div>

          <p className="font-serif text-lg md:text-xl text-background/85 mb-12 leading-relaxed max-w-lg mx-auto">
            Sete gerações de história, da fronteira
            franco-alemã ao sul do Brasil
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/arvore"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-primary-dark font-semibold text-sm transition-all duration-200 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Explorar a Árvore
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8H13M9 4L13 8L9 12" />
              </svg>
            </Link>
            <Link
              href="/historia"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-background/30 text-background font-medium text-sm transition-all duration-200 hover:bg-background/10 hover:border-background/50"
            >
              Conhecer a História
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.2em] text-background">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-background to-transparent" />
        </div>
      </section>

      {/* Introduction */}
      <section className="relative max-w-3xl mx-auto px-6 py-20 md:py-24">
        <div className="absolute -left-4 top-20 w-1 h-20 bg-gradient-to-b from-accent/40 to-transparent rounded-full hidden md:block" />
        <p className="text-lg leading-[1.85] text-foreground/85">
          Este site é uma homenagem à história da família Ledur, que se estende
          desde a região da Lorena, na fronteira entre a França e a Alemanha,
          até o sul do Brasil. Aqui reunimos a genealogia, os mapas, os
          sobrenomes e os marcos históricos que conectam mais de trezentos anos
          de trajetória familiar.
        </p>
        <p className="text-lg leading-[1.85] text-foreground/85 mt-6">
          O conteúdo deste projeto é fundamentado em duas obras de referência:
          o livro <em className="text-primary-dark font-medium not-italic">Da Lorena para o Brasil</em>, de Christoph Heller e
          Tarso B. Ledur Kist, que revela as raízes europeias da família, e
          o livro <em className="text-primary-dark font-medium not-italic">OS LEDUR no Brasil</em>, de João Roque Ledur, que
          documenta a genealogia dos descendentes em território brasileiro.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative bg-surface-warm py-20 md:py-24">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted mb-3 font-semibold">
              1659 &mdash; Presente
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Nossa História
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Os principais marcos da trajetória da família Ledur,
              da Europa ao Brasil
            </p>
          </div>
          <Timeline limit={8} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Quick Links */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Explore
          </h2>
          <p className="text-text-muted max-w-md mx-auto">
            Navegue pelas diferentes seções do projeto
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {QUICK_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex gap-5 rounded-xl border border-border/60 bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary-dark/5 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-primary/70 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                {link.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-primary-dark mb-1.5 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {link.description}
                </p>
              </div>
              <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-border opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 4L10 8L6 12" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Livros que contam nossa história */}
      <section className="relative bg-surface-warm py-16 md:py-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted mb-3 font-semibold">
              Leitura
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Livros que contam nossa história
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Duas obras de referência documentam a trajetória da família Ledur,
              das origens na Lorena ao Brasil.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/livros"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/40 bg-surface px-6 py-3 font-medium text-primary-dark transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md"
            >
              Conhecer os livros
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 4L10 8L6 12" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Books / Sources */}
      <section className="relative bg-primary-dark py-20 md:py-24 overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-3 font-semibold">
              Referências
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4">
              Fontes
            </h2>
            <p className="text-background/70 max-w-md mx-auto">
              As obras que fundamentam este projeto, complementadas por registros
              digitais no FamilySearch relacionados a Michel Ledur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm p-7 hover:bg-background/8 transition-colors duration-300">
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Registros digitais
              </p>
              <h3 className="font-serif text-xl font-semibold text-background mb-2">
                FamilySearch (Michel Ledur)
              </h3>
              <p className="text-sm text-background/75 mb-4">
                Registros indexados de batismo, casamento e outros eventos ligados
                a Michel Ledur e sua família, preservados em formato digital.
              </p>
              <a
                href="https://www.familysearch.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                Acessar FamilySearch
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 4L10 8L6 12" />
                </svg>
              </a>
            </article>
                        <article className="rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm p-7 hover:bg-background/8 transition-colors duration-300">
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                2024
              </p>
              <h3 className="font-serif text-xl font-semibold text-background mb-2">
                Da Lorena para o Brasil
              </h3>
              <p className="text-sm text-background/65 mb-4">
                Christoph Heller e Tarso B. Ledur Kist
              </p>
              <p className="text-sm leading-relaxed text-background/75">
                Pesquisa aprofundada que conecta as origens europeias da família
                Ledur, desde Joachim Harter em 1659 na Lorena, até a emigração
                para o Brasil no século XIX.
              </p>
              <a
                href="https://www.mercadolivre.com.br/livro/up/MLBU1761191681"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                Comprar no Mercado Livre
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 4L10 8L6 12" />
                </svg>
              </a>
            </article>
            <article className="rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm p-7 hover:bg-background/8 transition-colors duration-300">
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                2006
              </p>
              <h3 className="font-serif text-xl font-semibold text-background mb-2">
                OS LEDUR no Brasil
              </h3>
              <p className="text-sm text-background/65 mb-4">
                João Roque Ledur
              </p>
              <p className="text-sm leading-relaxed text-background/75">
                Documentação genealógica abrangente da família Ledur no Brasil,
                reunindo dados de centenas de descendentes desde a chegada de
                Michel Ledur ao Rio Grande do Sul.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
