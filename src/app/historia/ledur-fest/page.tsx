import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ledur Fest - Reuniões da Família Ledur",
  description:
    "As Ledur Fest: reuniões dos descendentes de Michel Ledur em Cerro Largo, Bom Princípio e Santa Terezinha. Encontrar-nos é solidificar os laços que nos unem.",
  openGraph: {
    title: "Ledur Fest - Reuniões da Família",
    description:
      "Encontros de descendentes Ledur em Cerro Largo, Bom Princípio e Santa Terezinha.",
  },
};

export default function LedurFestPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/historia" className="hover:text-primary">
                História
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">Ledur Fest</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="mb-2 block text-sm font-medium text-accent">
            Reuniões da família
          </span>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Ledur Fest
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            As reuniões que solidificam os laços entre os descendentes de Michel
            Ledur, buscando as raízes comuns.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Encontrar-nos é solidificar os laços que nos unem
            </h2>
            <p className="mb-4">
              O convite que acompanha as reuniões da família Ledur resume o
              espírito desses encontros: &ldquo;Encontrar-nos é solidificar os
              laços que nos unem, buscando as raízes.&rdquo; As Ledur Fest são
              ocasiões de confraternização entre descendentes do imigrante Michel
              Ledur, vindos de diferentes regiões do Brasil e do exterior.
            </p>
            <p>
              Nessas reuniões, as gerações se encontram para celebrar a história
              comum, trocar notícias e manter viva a memória das origens na Lorena
              e da travessia que trouxe a família ao Brasil em 1829.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Histórico das reuniões
            </h2>
            <p className="mb-4">
              Segundo o livro &ldquo;OS LEDUR no Brasil&rdquo; (João Roque Ledur,
              2006), as primeiras Ledur Fest foram realizadas em três localidades
              que concentram grande número de descendentes:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/90">
              <li>
                <strong>1.ª Ledur Fest — Cerro Largo (RS)</strong>, na região das
                Missões, onde a família se estabeleceu a partir de 1916.
              </li>
              <li>
                <strong>2.ª Ledur Fest — Bom Princípio (RS)</strong>, no Vale do
                Caí, núcleo histórico da família desde os primeiros tempos da
                colonização.
              </li>
              <li>
                <strong>3.ª Ledur Fest — Santa Terezinha</strong>, reforçando os
                laços entre os ramos estabelecidos em diferentes municípios.
              </li>
            </ul>
            <p className="mt-4">
              Essas reuniões continuam a ser um marco na vida comunitária dos
              Ledur, aproximando parentes distantes e preservando o sentido de
              pertencimento à mesma história familiar.
            </p>
          </section>
        </div>

        <nav
          aria-label="Navegação entre páginas"
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/historia/cultura"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            &larr; Cultura Teuto-Brasileira
          </Link>
          <Link
            href="/historia"
            className="text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            Voltar à História &rarr;
          </Link>
        </nav>
      </article>
    </main>
  );
}
