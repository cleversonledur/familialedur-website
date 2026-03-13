import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cultura Teuto-Brasileira - História da Família Ledur",
  description:
    "A identidade cultural formada pela união das tradições germânicas com a vida no sul do Brasil.",
};

export default function CulturaPage() {
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
              Cultura Teuto-Brasileira
            </li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="mb-2 block text-sm font-medium text-accent">
            Parte 4
          </span>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Cultura Teuto-Brasileira
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            A identidade única que surgiu do encontro entre as tradições
            germânicas e a vida no sul do Brasil.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              A identidade teuto-brasileira
            </h2>
            <p className="mb-4">
              Os imigrantes alemães que se estabeleceram no sul do Brasil não
              se tornaram simplesmente brasileiros nem permaneceram alemães.
              Ao longo das gerações, forjaram uma identidade própria, a
              teuto-brasileira, que combinava elementos de ambas as culturas em
              algo inteiramente novo.
            </p>
            <p>
              Essa identidade se manifestava no cotidiano: na maneira de
              construir as casas, no modo de organizar as comunidades, nos
              alimentos que preparavam e na forma como celebravam suas datas
              importantes. Os Ledur, como tantas outras famílias de origem
              germânica, foram simultaneamente agentes e produtos dessa
              transformação cultural.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Língua e tradições
            </h2>
            <p className="mb-4">
              Por gerações, o alemão permaneceu como língua do cotidiano nas
              colônias. O dialeto Hunsrueckisch, trazido pelos imigrantes da
              região do Hunsrueck e arredores, tornou-se a variante mais falada
              entre os descendentes de alemães no sul do Brasil. Era a língua
              da casa, das conversas entre vizinhos e dos cultos religiosos.
            </p>
            <p>
              As tradições germânicas também persistiram: o artesanato em
              madeira, a organização comunitária, o apreço pela educação e o
              valor atribuído ao trabalho da terra. Com o tempo, essas práticas
              foram se misturando a influências brasileiras, criando costumes
              híbridos que distinguiam as comunidades teuto-brasileiras de
              qualquer outro grupo cultural.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Religião e comunidade
            </h2>
            <p className="mb-4">
              A fé católica era o eixo em torno do qual girava a vida
              comunitária. As paróquias não eram apenas locais de culto, mas
              centros de convivência social, onde se organizavam festas,
              casamentos e decisões coletivas. A Capela Santana foi a paróquia
              da família Ledur, onde batismos, casamentos e funerais marcavam as
              passagens da vida.
            </p>
            <p>
              A construção de uma igreja era geralmente a primeira obra
              comunitária de cada núcleo colonial. Os colonos doavam materiais
              e trabalho, e a capela se tornava o símbolo visível da comunidade.
              Em torno dela surgiam a escola, o salão de festas e o cemitério,
              formando o núcleo social que mantinha as famílias unidas.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Gastronomia e festas
            </h2>
            <p className="mb-4">
              A culinária teuto-brasileira reflete de forma notável a fusão
              cultural. Receitas germânicas foram adaptadas aos ingredientes
              disponíveis no Brasil: a batata, o milho, a mandioca e as frutas
              tropicais passaram a conviver com as salsichas, os cucas, o
              chucrute e as tortas que as famílias preparavam seguindo receitas
              trazidas da Europa.
            </p>
            <p>
              As festas comunitárias, os Kerbs, celebravam o padroeiro da
              localidade e reuniam famílias de toda a região. Eram ocasiões de
              confraternização, com música, dança, comida farta e jogos
              tradicionais. O Kerb persistiu como uma das expressões culturais
              mais vivas da comunidade teuto-brasileira, celebrado até hoje em
              muitas localidades do Rio Grande do Sul e do Paraná.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">O legado</h2>
            <p className="mb-4">
              Quase dois séculos depois da chegada de Michel e Margaretha, a
              herança teuto-brasileira continua presente nas comunidades onde os
              Ledur e outras famílias de origem germânica se estabeleceram. A
              arquitetura em enxaimel, os sobrenomes, as festas comunitárias e
              as expressões em dialeto alemão são marcas visíveis dessa herança
              em municípios do Rio Grande do Sul e do Paraná.
            </p>
            <p>
              O legado, porém, vai além do visível. Manifesta-se nos valores
              transmitidos de geração em geração: o apreço pelo trabalho, o
              senso de comunidade, a importância da família e a capacidade de
              adaptação sem perder as raízes. São esses valores, mais do que
              qualquer monumento ou documento, que conectam os descendentes de
              hoje aos pioneiros que desembarcaram em São Leopoldo naquele dia
              de março de 1829.
            </p>
          </section>
        </div>

        <nav
          aria-label="Navegação entre páginas"
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/historia/colonizacao"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            &larr; Colonização no RS
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
