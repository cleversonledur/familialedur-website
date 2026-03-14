import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Viagem no Olbers - História da Família Ledur",
  description:
    "A travessia do Atlântico no navio Olbers (41,50m, 875 passageiros), de Bremen ao Rio Grande do Sul em 1828-1829. Registro de desembarque de Michel Ledur e família em 18 de março de 1829.",
  openGraph: {
    title: "A Viagem no Navio Olbers - Família Ledur",
    description:
      "De Bremen ao Brasil: a travessia da família Ledur no navio Olbers (1828-1829).",
  },
};

export default function ViagemPage() {
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
            <li className="font-medium text-foreground">
              A Viagem no Olbers
            </li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="mb-2 block text-sm font-medium text-accent">
            Parte 2
          </span>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            A Viagem no Olbers
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            De Bremen ao litoral brasileiro, a travessia que trouxe Michel e
            Margaretha Ledur para um novo continente.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              A decisão de emigrar
            </h2>
            <p className="mb-4">
              Para Michel Ledur e Margaretha Theobald, a decisão de deixar
              Grosshemmersdorf não foi tomada de forma leviana. As dificuldades
              econômicas da década de 1820, somadas à escassez de terras e ao
              crescimento populacional, tornavam o futuro na Europa incerto. A
              possibilidade de obter terras próprias no Brasil representava uma
              oportunidade que a região natal já não oferecia.
            </p>
            <p>
              Agentes do governo brasileiro percorriam as aldeias germânicas
              promovendo a emigração. Ofereciam passagens subsidiadas, lotes de
              terra e apoio nos primeiros anos de estabelecimento. Para uma
              família jovem com filhos pequenos, a promessa de terras férteis
              numa terra distante era ao mesmo tempo assustadora e irresistível.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">O navio Olbers</h2>
            <figure className="my-6 overflow-hidden rounded-xl border border-border bg-muted/20">
              <Image
                src="/documentos/OLBERS.jpg"
                alt="Navio Olbers, veleiro que levou Michel e Margaretha Ledur e outras famílias de Bremen ao Brasil em 1828-1829"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <figcaption className="px-4 py-2 text-sm text-text-muted border-t border-border">
                Navio Olbers — utilizado nas viagens de emigrantes alemães ao Brasil.
              </figcaption>
            </figure>
            <p className="mb-4">
              Em 1828, Michel e Margaretha embarcaram no navio Olbers, partindo
              do porto de Bremen, um dos principais pontos de embarque para
              emigrantes alemães na época. A família integrava o 26.o grupo de
              imigrantes alemães destinados ao sul do Brasil.
            </p>
            <p className="mb-4">
              O Olbers media 41,50 m por 9,70 m e era o maior veleiro usado nas
              viagens ao Brasil. A primeira viagem levou cerca de 875 pessoas de
              152 famílias. O nome homenageia o astrônomo Hans Olbers.
            </p>
            <p>
              Os navios que realizavam essas travessias eram embarcações a vela,
              adaptadas para transportar dezenas de famílias em condições
              bastante precárias. Os passageiros dividiam espaços apertados no
              porão, levando consigo apenas o que podiam carregar: ferramentas,
              roupas, sementes e poucos pertences pessoais.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Rota até Bremen e escolha do porto
            </h2>
            <p className="mb-4">
              O caminho mais fácil da região do Sarre seria Sarre → Mosel → Reno
              → Roterdam. Para Bremen, porém, a viagem era por terra — ainda não
              havia trens. Bremen promoveu ativamente seu porto para a emigração;
              o Major Georg von Schäffer escolheu Bremen após Hamburgo proibir o
              recrutamento de colonos para o Brasil.
            </p>
            <p className="mb-4">
              Os emigrantes esperaram cerca de 13 semanas no albergue &ldquo;Vor
              dem Bunten Tore&rdquo; (Buntentor), em Bremen, à espera de ventos
              favoráveis. O Buntentor (Südertor) fazia parte das fortificações de
              Bremen (c. 1620–1861) e era o bairro onde ficava o albergue dos
              emigrantes.
            </p>
            <p>
              O Olbers foi um dos penúltimos navios Bremen–Brasil; em seguida o
              governo suspendeu o recrutamento. Entre 1826 e 1828 estima-se que
              3.000 a 4.000 pessoas embarcaram em Bremen com destino ao Rio de
              Janeiro; a emigração alemã ao Brasil só foi retomada em 1845. Na
              primavera de 1827, Bremen chegou a rejeitar cerca de 3.000
              emigrantes do sul da Alemanha (Württemberg) e fechou acessos por
              Minden, Osnabrück e Münster.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              A travessia do Atlântico
            </h2>
            <p className="mb-4">
              A viagem entre Bremen e o litoral brasileiro levava tipicamente de
              dois a três meses, dependendo das condições do mar e dos ventos.
              O custo era de cerca de 60 táleres até o Rio (crianças com
              desconto ou isentas); o resto era pago pelo governo brasileiro.
              Era uma travessia longa e penosa, marcada pelo confinamento, pela
              alimentação limitada e pela ameaça constante de doenças.
            </p>
            <p className="mb-4">
              Os passageiros enfrentavam tempestades, enjoos e a monotonia de
              semanas sem avistar terra. A água potável era racionada e os
              alimentos muitas vezes deterioravam antes do fim da viagem. Para
              famílias com crianças pequenas, como os Ledur, a travessia era
              ainda mais desafiadora.
            </p>
            <p>
              Apesar das adversidades, a esperança de uma vida melhor mantinha
              os emigrantes firmes. Cada dia no mar era um dia mais próximo da
              terra prometida, e a comunidade que se formava a bordo entre as
              famílias alemãs criava laços que se manteriam por gerações na nova
              pátria.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Outras famílias no Olbers
            </h2>
            <p className="mb-4">
              No mesmo navio viajaram outras famílias do atual Sarre, quase todas
              de zona rural (Wadern, Tholey, St. Wendel): Gödembs (Oberlöstern),
              Junges-Kolbus (Itzbach), Leidems (Krettnich), Probst (Reimsbach),
              Volz e Wendling (Niederlinxweiler), Dill (Thalexweiler), Henz
              (Biel-Wadern), Knapp (Gehweiler), Kremer e Becker (Mettnich),
              Ludwig (Bardenbach). A família Junges-Kolbus emigrou com cinco
              filhos; o sexto, Georg (Jorge) Junges, nasceu em São José do
              Hortêncio (RS) em 1830. Pedro (Peter) Junges (1850–1929) casou-se
              com Susanna Ledur (1853–1942), neta de Michel, em 1872.
            </p>
            <p>
              Josef Colbus, de Kerprichhemmersdorf, é citado como possível
              contato ou fonte de informações entre as famílias Ledur-Theobald e
              Junges-Colbus sobre a emigração — na época as informações
              propagavam-se sobretudo por via oral.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Chegada ao Brasil</h2>
            <p className="mb-4">
              Em 18 de março de 1829, o navio Olbers chegou ao Rio Grande do
              Sul. A família Ledur desembarcou com destino a São Leopoldo, o
              principal núcleo da colonização alemã na região. A partida de
              Bremen ocorreu em 26 de setembro de 1828.
            </p>
            <p className="mb-4">
              A família que desembarcou era composta por cinco pessoas: Michel,
              então com 33 anos, sua esposa Margaretha, e três filhos pequenos.
              Jacob, o mais velho, tinha seis anos; Nicolau, quatro; e João, o
              caçula, dois anos de idade.
            </p>

            <div className="my-6 rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="mb-3 font-semibold text-primary-dark">
                Registro de desembarque
              </h3>
              <p className="mb-3 text-sm text-text-muted">
                Registro de chegada ao Rio Grande do Sul em 18 de março de 1829,
                disponível no Arquivo Histórico do Rio Grande do Sul.
              </p>
              <ul className="mb-4 space-y-1 text-sm text-foreground/80 font-mono">
                <li>288 - 694 Michel Ledur, 33 anos, católica</li>
                <li>289 - 695 Margarida, mulher, 33 anos, católica</li>
                <li>290 - 696 Jacob, filho, 6 anos, católica</li>
                <li>291 - 697 Nicolas, filho, 4 anos, católica</li>
                <li>292 - 698 João, filho, 2 anos, católica</li>
              </ul>
              <div className="overflow-hidden rounded-lg border border-border bg-white">
                <object
                  data="/documentos/entrada-michael-ledur-e-familia.pdf"
                  type="application/pdf"
                  className="h-[min(70vh,550px)] w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
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
              <p className="mt-3 text-center text-xs text-text-muted">
                Fonte: Arquivo Histórico do RS · Relatório Assessoria Genealógica
                Strelow &amp; Timm (2025) ·{" "}
                <a
                  href="/documentos/entrada-michael-ledur-e-familia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Baixar PDF
                </a>
              </p>
            </div>
            <p>
              O Brasil que os recebeu era muito diferente de tudo que conheciam.
              O clima tropical, a vegetação densa e exuberante, os sons e
              cheiros de uma terra completamente nova. Pela frente, havia o
              desafio de construir uma vida a partir do zero, em uma terra
              desconhecida, falando uma língua que ninguém ao redor compreendia.
            </p>
          </section>
        </div>

        <nav
          aria-label="Navegação entre páginas"
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/historia/origens"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            &larr; Origens na Lorena
          </Link>
          <Link
            href="/historia/colonizacao"
            className="text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            Colonização no RS &rarr;
          </Link>
        </nav>
      </article>
    </main>
  );
}
