import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre o projeto Família Ledur, fontes utilizadas e créditos.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">Sobre</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Sobre</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Créditos, fontes e informações sobre este projeto.
          </p>
        </header>

        <div className="space-y-16">
          {/* Sobre este site */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Sobre este site
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Este site foi criado com o propósito de preservar e
                compartilhar a história da família Ledur, tornando acessível
                a todos os membros da família e pesquisadores interessados o
                rico acervo de informações contido em duas obras fundamentais
                de pesquisa genealógica.
              </p>
              <p>
                A trajetória dos Ledur, que se estende desde Joachim Harter
                em 1659 na Lorena até os dias atuais no Brasil, é uma
                história de migrações, adaptações e construção de identidade.
                Ao reunir essas informações em formato digital, buscamos
                facilitar o acesso a essa memória e incentivar novas gerações
                a conhecerem suas raízes.
              </p>
              <p>
                O conteúdo aqui apresentado foi organizado e estruturado a
                partir das fontes citadas abaixo, com o objetivo de oferecer
                uma visão clara e navegável da genealogia e da história
                familiar.
              </p>
            </div>
          </section>

          {/* Fontes */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Fontes</h2>
            <div className="space-y-6">
            <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-serif text-lg font-semibold text-primary-dark">
                  FamilySearch — Registros de Michel Ledur
                </h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Plataforma de pesquisa genealógica mantida pela Church of
                  Jesus Christ of Latter-day Saints, que reúne milhões de
                  registros digitalizados e indexados ao redor do mundo.
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Para o caso Ledur, são especialmente relevantes os registros
                  associados a Michel Ledur e seus familiares, que ajudam a
                  confirmar datas, locais e vínculos familiares.
                </p>
                <a
                  href="https://www.familysearch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Acessar FamilySearch
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 4L10 8L6 12" />
                  </svg>
                </a>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-serif text-lg font-semibold text-primary-dark">
                  Da Lorena para o Brasil: a história das famílias Ledur,
                  Theobald e outras da sua vizinhança
                </h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Autores: Christoph Heller e Tarso B. Ledur Kist
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Publicação: 2024
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  ISBN: 978-65-01-05730-9
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Editora: Kist &amp; Rodrigues
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Impressão: Evangraf, Porto Alegre
                </p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Esta obra trouxe à luz as origens europeias da família,
                  conectando a genealogia até Joachim Harter em 1659 na
                  Lorena e documentando o contexto histórico da região
                  fronteiriça entre França e Alemanha.
                </p>
                <a
                  href="https://www.mercadolivre.com.br/livro/up/MLBU1761191681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Comprar no Mercado Livre
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 4L10 8L6 12" />
                  </svg>
                </a>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-serif text-lg font-semibold text-primary-dark">
                  OS LEDUR no Brasil: Genealogia da Família
                </h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Autor: João Roque Ledur
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Publicação: 2006
                </p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Obra pioneira na documentação da genealogia da família
                  Ledur no Brasil, registrando a descendência desde a
                  chegada de Michel Ledur até as gerações contemporâneas,
                  com detalhado levantamento de nomes, datas e localidades.
                  O Anexo 7 lista sacerdotes descendentes do imigrante Ledur.
                </p>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Além dessas obras, também foram consultados registros digitais no
                FamilySearch relacionados a Michel Ledur e seus descendentes.
              </p>
            </div>
          </section>

          {/* Contato */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Contato</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Se você possui informações adicionais, correções ou
                documentos que possam complementar este acervo, sua
                contribuição é bem-vinda. Descendentes da família Ledur e
                pesquisadores podem entrar em contato para compartilhar
                dados, fotografias ou relatos que enriquecam esta história.
              </p>
              <p>
                Correções factuais são especialmente valorizadas. Apesar
                do cuidado na organização das informações, erros podem
                ocorrer na transcrição e reestruturação dos dados. Toda
                contribuição será analisada e, quando pertinente,
                incorporada ao site com os devidos créditos.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
