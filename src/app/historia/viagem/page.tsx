import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Viagem no Olbers - História da Família Ledur",
  description:
    "A travessia do Atlântico no navio Olbers, de Bremen ao Brasil, em 1828-1829.",
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
            <p className="mb-4">
              Em 1828, Michel e Margaretha embarcaram no navio Olbers, partindo
              do porto de Bremen, um dos principais pontos de embarque para
              emigrantes alemães na época. A família integrava o 26.o grupo de
              imigrantes alemães destinados ao sul do Brasil.
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
              A travessia do Atlântico
            </h2>
            <p className="mb-4">
              A viagem entre Bremen e o litoral brasileiro levava tipicamente de
              dois a três meses, dependendo das condições do mar e dos ventos.
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
            <h2 className="mb-4 text-2xl font-semibold">Chegada ao Brasil</h2>
            <p className="mb-4">
              Em 15 de março de 1829, o navio Olbers chegou ao Brasil, e a
              família Ledur desembarcou com destino a São Leopoldo, no Rio
              Grande do Sul, o principal núcleo da colonização alemã na região.
            </p>
            <p className="mb-4">
              A família que desembarcou era composta por cinco pessoas: Michel,
              então com 32 anos, sua esposa Margaretha, e três filhos pequenos.
              Jacob, o mais velho, tinha cerca de seis anos; Nicolau, por volta
              de quatro; e João, o caçula, aproximadamente dois anos de idade.
            </p>
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
