import type { Metadata } from "next";
import Link from "next/link";
import ZoomableImage from "@/components/documentos/ZoomableImage";

export const metadata: Metadata = {
  title: "Documentos Históricos - Família Ledur",
  description:
    "Certidões de nascimento e casamento de Michel Ledur (Grosshemmersdorf, 1797), registro de desembarque no Brasil (1829) e como obter cópias do Kreisarchiv Saarlouis.",
  openGraph: {
    title: "Documentos Históricos - Família Ledur",
    description:
      "Certidões originais de Michel Ledur e registro de entrada no Brasil (1829).",
  },
};

export default function DocumentosPage() {
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
            <li className="font-medium text-foreground">Documentos</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Documentos</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Certidões e fontes documentais de Michel Ledur e Margaretha Theobald,
            registro de entrada no Brasil e informações sobre como obter cópias oficiais.
          </p>
        </header>

        <div className="space-y-16">
          {/* Registro de entrada no Brasil */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Relatório Michael Ledur — Registro de entrada no Brasil
            </h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              Registro de chegada ao Rio Grande do Sul em 18 de março de 1829,
              disponível no Arquivo Histórico do Rio Grande do Sul. Relatório
              preparado pela Assessoria Genealógica Strelow &amp; Timm (2025).
            </p>

            <div className="mb-6 rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="mb-3 font-semibold text-primary-dark">
                Registro de desembarque
              </h3>
              <ul className="space-y-1 text-sm text-foreground/80 font-mono">
                <li>288 - 694 Michel Ledur, 33 anos, católica</li>
                <li>289 - 695 Margarida, mulher, 33 anos, católica</li>
                <li>290 - 696 Jacob, filho, 6 anos, católica</li>
                <li>291 - 697 Nicolas, filho, 4 anos, católica</li>
                <li>292 - 698 João, filho, 2 anos, católica</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <object
                  data="/documentos/entrada-michael-ledur-e-familia.pdf"
                  type="application/pdf"
                  className="h-[min(85vh,700px)] w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <p className="text-sm text-text-muted">
                      Seu navegador não suporta visualização de PDF incorporado.
                    </p>
                    <a
                      href="/documentos/entrada-michael-ledur-e-familia.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-dark px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary"
                    >
                      Abrir PDF
                    </a>
                  </div>
                </object>
              </div>
              <div className="text-center">
                <a
                  href="/documentos/entrada-michael-ledur-e-familia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M9 15l3 3 3-3" />
                  </svg>
                  Baixar entrada-michael-ledur-e-familia.pdf
                </a>
              </div>
            </div>
          </section>

          {/* Certidão de nascimento */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Certidão de nascimento de Michel Ledur
            </h2>
            <div className="space-y-4">
              <ZoomableImage
                src="/documentos/certidao-nascimento-michael-ledur.jpg"
                alt="Certidão de nascimento de Michel Ledur, Grosshemmersdorf, 1797"
                className="w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="mb-2 font-semibold text-primary-dark">
                  Fonte (FamilySearch)
                </h3>
                <p className="mb-2 text-sm text-foreground/80">
                  Registro encontrado no catálogo:{" "}
                  <a
                    href="https://www.familysearch.org/pt/search/catalog/68041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-dark underline hover:text-primary"
                  >
                    Zivilstandsregister, 1793-1875
                  </a>
                </p>
                <ul className="space-y-1 text-sm text-text-muted">
                  <li>
                    <strong>Autores:</strong> Oberesch (Kr. Saarlouis).
                    Standesamt
                  </li>
                  <li>
                    <strong>No filme:</strong> Grosshemmersdorf: Geburten,
                    Heiraten, Tote 1793-1812
                  </li>
                  <li>
                    <strong>Filme #</strong> 008229907 — <strong>Image:</strong>{" "}
                    112
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certidões de casamento */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Certidão de casamento de Michel Ledur e Margaretha Theobald
            </h2>
            <p className="mb-4 text-sm text-text-muted">
              Cópias obtidas do Kreisarchiv Saarlouis. A imagem está um pouco
              prejudicada porque a cópia amassou durante o envio pelo correio.
            </p>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              <ZoomableImage
                src="/documentos/certidao-casamento-michael-ledur.jpg"
                alt="Certidão de casamento de Michel Ledur e Margaretha Theobald (página 1)"
                className="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ZoomableImage
                src="/documentos/certidao-casamento-michael-ledur2.jpg"
                alt="Certidão de casamento de Michel Ledur e Margaretha Theobald (página 2)"
                className="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted">
              Fonte:{" "}
              <a
                href="https://www.kreis-saarlouis.de/Kultur/Kreisarchiv.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark underline hover:text-primary"
              >
                Kreisarchiv Saarlouis
              </a>{" "}
              (cópia oficial enviada por e-mail).
            </p>
          </section>

          {/* Como obter cópias oficiais */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Como obter cópias oficiais dos documentos alemães
            </h2>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-foreground/80 leading-relaxed">
                É possível obter cópia oficial das certidões de nascimento e
                casamento acima entrando em contato com o{" "}
                <a
                  href="https://www.kreis-saarlouis.de/Kultur/Kreisarchiv.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary-dark underline hover:text-primary"
                >
                  Kreisarchiv Saarlouis
                </a>{" "}
                pelos e-mails{" "}
                <a
                  href="mailto:info@helmut-grein.de"
                  className="text-primary-dark underline hover:text-primary"
                >
                  info@helmut-grein.de
                </a>{" "}
                e{" "}
                <a
                  href="mailto:heimatkunde@vfh-saarlouis.de"
                  className="text-primary-dark underline hover:text-primary"
                >
                  heimatkunde@vfh-saarlouis.de
                </a>
                . Eles enviam gratuitamente para o Brasil. No caso de um
                colaborador deste site, a entrega levou aproximadamente três
                semanas.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                No arquivo enviado pelo Kreisarchiv existe também a certidão de
                casamento de Michel Ledur e Margaretha Theobald. As imagens de
                casamento acima são fotos de uma cópia enviada pelo correio; a
                qualidade está um pouco prejudicada porque a cópia amassou
                durante o envio.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
