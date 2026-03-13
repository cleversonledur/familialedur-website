import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origens na Lorena - História da Família Ledur",
  description:
    "As raízes da família Ledur na região da Lorena, fronteira entre França e Alemanha.",
};

export default function OrigensPage() {
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
            <li className="font-medium text-foreground">Origens na Lorena</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="mb-2 block text-sm font-medium text-accent">
            Parte 1
          </span>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Origens na Lorena
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            A região fronteiriça entre França e Alemanha onde a família Ledur
            viveu por gerações, antes de cruzar o Atlântico.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">A Lorena</h2>
            <p className="mb-4">
              A Lorena, conhecida como Lothringen em alemão e Lorraine em
              francês, é uma região histórica situada na fronteira entre a França
              e a Alemanha. Terras férteis e depósitos de carvão fizeram da
              região um território disputado por séculos. Sua posição
              estratégica significou que a soberania sobre a área mudou diversas
              vezes ao longo da história, alternando entre o domínio francês e o
              germânico.
            </p>
            <p>
              Para as famílias que viviam nessa faixa de terra, a instabilidade
              política era uma constante. Idiomas, leis e governos mudavam de
              acordo com os resultados das guerras europeias, mas a população
              local mantinha suas raízes e seu modo de vida rural, marcado pela
              agricultura e pelo catolicismo.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              A família Harter-Ledur
            </h2>
            <p className="mb-4">
              Os registros mais antigos da família remontam a Joachim Harter,
              nascido por volta de 1659 e falecido em 1740, que vivia na região
              do castelo de Hombourg-sur-Canner. Joachim casou-se com Barbe
              Hennequin (1671-1743), e juntos estabeleceram a linhagem que mais
              tarde adotaria o sobrenome Ledur.
            </p>
            <p>
              A transição do sobrenome Harter para Ledur reflete a influência
              linguística e cultural da região. Em uma área onde o francês e o
              alemão coexistiam, era comum que nomes de família sofressem
              adaptações. O sobrenome Ledur consolidou-se ao longo das gerações
              seguintes, tornando-se a identidade que a família carregaria
              consigo até o Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Grosshemmersdorf</h2>
            <p className="mb-4">
              Michel Ledur nasceu em 4 de fevereiro de 1797 na aldeia de
              Grosshemmersdorf, uma pequena localidade que hoje pertence ao
              estado do Saarland, na Alemanha. A vila era típica da região rural
              da época: poucas famílias vivendo da agricultura, cercadas por
              florestas e campos cultivados.
            </p>
            <p>
              A vida em Grosshemmersdorf seguia o ritmo das estações. As
              famílias cultivavam cereais e criavam animais, e a vida social
              girava em torno da igreja e dos trabalhos comunitários. Foi nesse
              ambiente que Michel cresceu e conheceu Margaretha Theobald, com
              quem viria a construir uma família e, eventualmente, tomar a
              decisão que mudaria o destino de seus descendentes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              O contexto histórico
            </h2>
            <p className="mb-4">
              As primeiras décadas do século XIX foram particularmente difíceis
              para a população da Europa central. As guerras napoleônicas haviam
              deixado a região devastada, e a reorganização política do Congresso
              de Viena (1815) trouxe novas fronteiras, mas não prosperidade.
            </p>
            <p className="mb-4">
              Na década de 1820, uma série de invernos rigorosos e colheitas
              fracassadas agravou a situação econômica. A superpopulação rural
              tornava a terra escassa, e muitas famílias não conseguiam mais
              sustentar-se. Esse cenário de dificuldades criou as condições para
              que milhares de alemães buscassem uma vida melhor em outros
              continentes.
            </p>
            <p>
              O Brasil, que naquele momento incentivava a imigração europeia
              para povoar suas regiões ao sul, surgiu como um destino promissor.
              Agentes de recrutamento percorriam as aldeias germânicas
              oferecendo terras e a promessa de um recomeço, atraindo famílias
              como a de Michel e Margaretha Ledur.
            </p>
          </section>
        </div>

        <nav
          aria-label="Navegação entre páginas"
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/historia"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            &larr; História
          </Link>
          <Link
            href="/historia/viagem"
            className="text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            A Viagem no Olbers &rarr;
          </Link>
        </nav>
      </article>
    </main>
  );
}
