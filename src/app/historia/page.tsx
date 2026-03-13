import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "História da Família Ledur",
  description:
    "A trajetória da família Ledur, da Lorena europeia até o sul do Brasil.",
};

const sections = [
  {
    title: "Origens na Lorena",
    href: "/historia/origens",
    summary:
      "A região fronteiriça entre França e Alemanha onde a família Ledur viveu por gerações. De Joachim Harter em 1659 até o nascimento de Michel Ledur em Grosshemmersdorf, em 1797.",
  },
  {
    title: "A Viagem no Olbers",
    href: "/historia/viagem",
    summary:
      "Em 1828, Michel e Margaretha Ledur embarcaram no navio Olbers, em Bremen, rumo ao Brasil. A travessia do Atlântico e a chegada a São Leopoldo em 15 de março de 1829.",
  },
  {
    title: "Colonização no Rio Grande do Sul",
    href: "/historia/colonizacao",
    summary:
      "O estabelecimento da família nas colônias alemãs do Rio Grande do Sul. De São Leopoldo a Bom Princípio, e a expansão para Feliz, Cerro Largo, Santa Rosa e Toledo.",
  },
  {
    title: "Cultura Teuto-Brasileira",
    href: "/historia/cultura",
    summary:
      "A identidade cultural única formada pela união das tradições germânicas com a vida no sul do Brasil. Língua, religião, gastronomia e festas que persistem até hoje.",
  },
];

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">História</li>
          </ol>
        </nav>

        <header className="mb-16">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            História da Família Ledur
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Da Lorena europeia ao sul do Brasil, a trajetória de uma família que
            cruzou o Atlântico em busca de uma nova vida. Conheça as origens, a
            viagem, a colonização e a cultura que os Ledur construíram ao longo
            de quase dois séculos no Brasil.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((section, index) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-primary-light hover:shadow-md"
            >
              <span className="mb-2 block text-sm font-medium text-accent">
                Parte {index + 1}
              </span>
              <h2 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                {section.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary-light transition-colors group-hover:text-primary">
                Ler mais &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
