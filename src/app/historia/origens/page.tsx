import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origens na Lorena - História da Família Ledur",
  description:
    "As raízes da família Ledur na Lorena (França/Alemanha): de Joachim Harter (1659) em Hombourg-sur-Canner a Michel Ledur (1797) em Grosshemmersdorf, Saarland.",
  openGraph: {
    title: "Origens na Lorena - Família Ledur",
    description:
      "De Joachim Harter (1659) a Michel Ledur (1797): a história da família na fronteira franco-alemã.",
  },
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
            <p className="mb-4">
              Três documentos mostram que o sobrenome original de Joachim era
              &ldquo;Hartert&rdquo; ou &ldquo;Hartard&rdquo;; &ldquo;Ledur&rdquo;
              teria sido inicialmente um pseudônimo — em francês &ldquo;le dur&rdquo;
              equivale ao alemão &ldquo;hart&rdquo; (duro, resistente). A transição
              do sobrenome Harter para Ledur reflete a influência linguística e
              cultural da região. Em uma área onde o francês e o alemão
              coexistiam, era comum que nomes de família sofressem adaptações. O
              sobrenome Ledur consolidou-se ao longo das gerações seguintes,
              tornando-se a identidade que a família carregaria consigo até o
              Brasil.
            </p>
            <p>
              No registro de casamento de Johann Wilhelm Ledur e Susanne Kiefer
              (10 de janeiro de 1786, Guerstling), o noivo aparece em francês como
              &ldquo;Jean Guillaume&rdquo; e assina em alemão &ldquo;Hans
              Wilhelm&rdquo; — exemplo do bilinguismo nos registros paroquiais da
              região.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Migrações internas na Lorena
            </h2>
            <p className="mb-4">
              Após a morte de Joachim Ledur (1739), Anna Elisabeth Wilbois
              mudou-se para Holbing com os filhos. Simon Ledur foi para
              Niedwelling-Guerstling por volta de 1755 (terra natal de Magdalena
              Klein). Johann Wilhelm estabeleceu-se em Hemmersdorf por volta de
              1787 (terra natal de Susanne Kiefer). Susanne Ledur, sobrinha de
              Johann Wilhelm, casou-se com Johann Kiefer em Guerstling (1816),
              mudou-se para Grosshemmersdorf e teve sete filhos; descendentes
              desse casamento ainda vivem no vilarejo. O sobrenome Ledur
              desapareceu depois também em Guerstling.
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
              Línguas e fronteira linguística
            </h2>
            <p className="mb-4">
              A região da Lorena está na fronteira entre o mundo francófono e o
              germânico. Os Juramentos de Estrasburgo (842) — primeiro tratado
              bilíngue conhecido, primeiro documento em francês e um dos
              primeiros em antigo alto-alemão — já refletiam essa dualidade. A
              fronteira linguística passou historicamente por eixos como
              Diedenhofen–Dieuze e depois se deslocou. A oeste de Saarlouis (área
              dos Ledur) predomina o francônio do Mosela; a sudeste do Mosela, o
              francônio do Reno. Essa convivência explica os registros em francês
              e alemão e as variantes de nomes como Jean Guillaume / Hans Wilhelm.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Os irmãos de Michel
            </h2>
            <p className="mb-4">
              Michel Ledur não foi o único filho de Johann Wilhelm e Suzanne
              Kieffer a construir família na região. Peter (Pierre) Ledur casou-se
              com Barbara Scheuer em Rehlingen (1824) e teve seis filhos. Franz
              Ledur casou-se com Anne Contelly em Freistroff (1826) e faleceu em
              Trois Maisons (perto de Villing, Mosela). Nada se sabe do quarto
              irmão, Nikolaus Ledur.
            </p>
            <p className="mb-4">
              O sobrenome Ledur desapareceu de Hemmersdorf após uma geração; em
              Rehlingen o único filho de Peter tinha dois anos quando a família
              partiu — o sobrenome deixou de existir no Sarre/Alemanha. Quem
              levou o nome Ledur ao Brasil foi apenas Michel.
            </p>
            <p>
              O túmulo da família Ledur no cemitério de Guerstling foi
              documentado em foto (disponível em geneanet.org). Em 2023 o túmulo
              já não parecia existir: na Alemanha túmulos são removidos após
              cerca de 25 anos, salvo sepulturas de soldados ou renovação paga
              pela família.
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
              de Viena (1815) trouxe novas fronteiras, mas não prosperidade. Em
              1816, o &ldquo;ano sem verão&rdquo; — associado a uma erupção
              vulcânica na Indonésia — trouxe queda de temperatura, perdas de
              colheitas, fomes e epidemias na Europa e na América do Norte.
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
