import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Livros sobre a Família Ledur",
  description:
    "Livros de referência: 'Da Lorena para o Brasil' (Heller & Kist, 2024) e 'OS LEDUR no Brasil' (João Roque Ledur, 2006). Genealogia e história da imigração alemã.",
  openGraph: {
    title: "Livros sobre a Família Ledur",
    description:
      "Da Lorena para o Brasil e OS LEDUR no Brasil: as obras que documentam a família.",
  },
};

export default function LivrosPage() {
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
            <li className="font-medium text-foreground">Livros</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Livros que contam nossa história
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            As obras de referência que documentam a trajetória da família Ledur,
            das origens na Lorena à colonização no Rio Grande do Sul.
          </p>
        </header>

        <section className="space-y-10">
          <article className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative h-64 w-40 shrink-0 overflow-hidden rounded-lg border border-border bg-muted/30 shadow-md">
                <Image
                  src="/documentos/delorenaparabrasil-capa.png"
                  alt="Capa do livro Da Lorena para o Brasil: foto de casa em Hemmersdorf no estilo típico da Lorena"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary-dark sm:text-3xl">
                  Da Lorena para o Brasil
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  a história das famílias Ledur, Theobald e outras da sua
                  vizinhança
                </p>
                <p className="mt-4 text-sm text-foreground/80">
                  <strong>Autores:</strong> Christoph Heller e Tarso B. Ledur
                  Kist
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  <strong>Publicação:</strong> 2024 ·{" "}
                  <strong>Editora:</strong> Kist &amp; Rodrigues
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  <strong>ISBN:</strong> 978-65-01-05730-9
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  Capa: casa em Hemmersdorf no estilo típico da Lorena (cortesia
                  Erich Mellinger e Maria Cawelius Mellinger). Restam poucos
                  exemplos na região.
                </p>
                <p className="mt-4 leading-relaxed text-foreground/85">
                  Pesquisa aprofundada que conecta as origens europeias da
                  família Ledur, desde Joachim Harter em 1659 na Lorena, até a
                  emigração para o Brasil no século XIX. Contém mais de uma
                  centena de cópias de mapas, fotos aéreas, lápides, placas,
                  certidões, listas de moradores e de baixas de exércitos, com
                  centenas de sobrenomes na documentação. Utiliza o sistema
                  d&apos;Aboville (Saragossa) para numerar gerações (n = nascido,
                  f = falecido, c = casamento; segundas e terceiras núpcias eram
                  comuns na época, dada a mortalidade e poucos divórcios).
                  Documenta o contexto histórico da região fronteiriça entre
                  França e Alemanha.
                </p>
                <a
                  href="https://www.mercadolivre.com.br/livro/up/MLBU1761191681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-dark px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary"
                >
                  Comprar no Mercado Livre
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 4L10 8L6 12" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex shrink-0 gap-3">
                <div className="relative h-64 w-40 overflow-hidden rounded-lg border border-border bg-muted/30 shadow-md">
                  <Image
                    src="/documentos/osledur-capa.png"
                    alt="Capa do livro OS LEDUR no Brasil"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div className="relative h-64 w-40 overflow-hidden rounded-lg border border-border bg-muted/30 shadow-md">
                  <Image
                    src="/documentos/osledur-contra-capa.png"
                    alt="Contracapa do livro OS LEDUR no Brasil"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary-dark sm:text-3xl">
                  OS LEDUR no Brasil
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  Genealogia da Família
                </p>
                <p className="mt-4 text-sm text-foreground/80">
                  <strong>Autor:</strong> João Roque Ledur
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  <strong>Publicação:</strong> 2006
                </p>
                <p className="mt-4 leading-relaxed text-foreground/85">
                  Obra pioneira na documentação da genealogia da família Ledur
                  no Brasil, registrando a descendência desde a chegada de Michel
                  Ledur até as gerações contemporâneas, com detalhado
                  levantamento de nomes, datas e localidades. Inclui o brasão da
                  família Ledur, capítulo sobre a &ldquo;Canção Brasilien&rdquo;,
                  costumes (Natal, Páscoa, namoro, casamento, música) e anexos
                  como a relação de sacerdotes descendentes do imigrante (Anexo
                  7). Revisão gramatical: Douglas Wisniewski.
                </p>
                <a
                  href="https://www.facebook.com/groups/1463558373877835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Entrar em contato com João Roque Ledur pelo grupo no Facebook
                </a>
              </div>
            </div>
          </article>
        </section>

        <p className="mt-12 text-center text-sm text-text-muted">
          Essas obras fundamentam o conteúdo deste site. Para mais detalhes sobre
          fontes e créditos,{" "}
          <Link href="/sobre" className="font-medium text-primary hover:underline">
            veja a página Sobre
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
