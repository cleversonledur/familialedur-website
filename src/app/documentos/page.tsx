import type { Metadata } from "next";
import Link from "next/link";
import ZoomableImage from "@/components/documentos/ZoomableImage";

export const metadata: Metadata = {
  title: "Documentos",
  description:
    "Certidões e fontes documentais de Michel Ledur: nascimento, casamento e como obter cópias oficiais do Kreisarchiv Saarlouis.",
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
            com informações sobre como obter cópias oficiais.
          </p>
        </header>

        <div className="space-y-16">
          {/* Como obter cópias oficiais */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Como obter cópias oficiais
            </h2>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-foreground/80 leading-relaxed">
                É possível obter cópia oficial dos registros entrando em contato
                com o <strong>Kreisarchiv Saarlouis</strong> pelos e-mails{" "}
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
                Neste arquivo existe também a certidão de casamento de Michel
                Ledur e Margaretha Theobald. As imagens de casamento abaixo
                são fotos de uma cópia enviada pelo correio; a imagem está um
                pouco ruim porque a cópia amassou durante o envio.
              </p>
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
                className="aspect-[3/4] max-w-lg"
                sizes="(max-width: 512px) 100vw, 512px"
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
              Fonte: Kreisarchiv Saarlouis (cópia oficial enviada por e-mail).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
