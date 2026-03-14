import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colonização no Rio Grande do Sul - História da Família Ledur",
  description:
    "O estabelecimento e a expansão da família Ledur nas colônias alemãs do Rio Grande do Sul.",
};

export default function ColonizacaoPage() {
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
              Colonização no Rio Grande do Sul
            </li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="mb-2 block text-sm font-medium text-accent">
            Parte 3
          </span>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Colonização no Rio Grande do Sul
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            De São Leopoldo a Bom Princípio e além, os primeiros passos da
            família Ledur em solo brasileiro.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              São Leopoldo e as colônias alemãs
            </h2>
            <p className="mb-4">
              São Leopoldo foi o marco inicial da colonização alemã no Rio
              Grande do Sul, fundada em 1824 como a primeira colônia germânica
              do estado. O governo imperial brasileiro distribuía lotes de terra
              aos imigrantes, que recebiam também ferramentas e provisões para
              os primeiros meses, com a expectativa de que transformassem a
              mata virgem em terras produtivas.
            </p>
            <p>
              O sistema colonial funcionava por linhas de ocupação, onde cada
              família recebia um lote estreito e comprido, geralmente com acesso
              a um curso d&apos;água. As famílias vizinhas formavam pequenas
              comunidades, que logo se organizavam em torno de uma capela e de
              uma escola, mantendo a língua e os costumes trazidos da Europa.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Os primeiros anos</h2>
            <p className="mb-4">
              Os primeiros tempos na nova terra foram marcados por trabalho
              intenso e perdas dolorosas. A família precisou derrubar mata,
              preparar o solo e construir abrigo, tudo em um ambiente
              completamente diferente do que conheciam na Europa. O destino
              inicial foi São Leopoldo; outras fontes citam também São
              Sebastião do Caí e São Vendelino, localidades da mesma região
              colonial.
            </p>
            <p className="mb-4">
              Apenas 37 dias após a chegada ao Brasil, a família enfrentou sua
              primeira grande tragédia: o pequeno João (Johannes), o filho mais
              novo, com cerca de dois anos e meio, faleceu. Pouco antes, em São
              Leopoldo, tinha nascido o irmão Felipe (Philipp), em 12 de abril de
              1829 — o primeiro Ledur nascido em solo brasileiro. As causas da
              morte de João são desconhecidas; as condições precárias, as
              doenças tropicais e o esgotamento da longa viagem certamente
              contribuíram.
            </p>
            <p>
              O nascimento de Felipe simbolizou o início de uma nova geração,
              enraizada na terra que se tornaria o lar definitivo da família.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Bom Princípio</h2>
            <p className="mb-4">
              Foi em Bom Princípio, localidade na região do Vale do Caí, que a
              família Ledur encontrou seu lugar definitivo nos primeiros anos de
              colonização. A região, com suas colinas e vales férteis, era
              propícia para a agricultura, e a comunidade alemã que ali se
              formou proporcionava o apoio mútuo necessário para a sobrevivência.
            </p>
            <p>
              Nicolau Ledur, o segundo filho de Michel, casou-se com Magdalena
              Goergen em 1845, formando uma das primeiras unidades familiares da
              segunda geração. Esse casamento, como tantos outros na comunidade,
              unia famílias de origem germânica e fortalecia os laços culturais
              e econômicos da colônia.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              A perda de Margaretha e os últimos anos de Michel
            </h2>
            <p className="mb-4">
              Em 1846, Margaretha Theobald Ledur faleceu, encerrando a
              parceria que havia sustentado a família desde a aldeia de
              Grosshemmersdorf, atravessando o Atlântico e enfrentando os
              primeiros anos da colonização. Ela tinha aproximadamente 49 anos.
            </p>
            <p>
              Michel Ledur sobreviveu à esposa por alguns anos, tendo
              testemunhado o crescimento de seus filhos e o estabelecimento da
              família na nova terra. Os oito filhos que o casal teve ao longo da
              vida garantiram a continuidade do nome Ledur no Brasil, formando a
              base de uma descendência que se espalharia por todo o sul do país.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Expansão para novas regiões
            </h2>
            <p className="mb-4">
              À medida que as gerações se sucediam, os descendentes de Michel
              Ledur foram se espalhando além de Bom Princípio. A busca por novas
              terras, o crescimento das famílias e as oportunidades em regiões
              de colonização mais recente levaram os Ledur a diversas
              localidades.
            </p>
            <p className="mb-4">
              Feliz, município vizinho a Bom Princípio, recebeu vários ramos da
              família. Em 1916, João Pedro Ledur mudou-se para Cerro Largo,
              na região das Missões, onde a família também criou raízes. Santa
              Rosa, outro polo colonial no noroeste gaúcho, foi destino de
              outros descendentes.
            </p>
            <p className="mb-4">
              A expansão não se limitou ao Rio Grande do Sul. Com a abertura de
              novas frentes de colonização no Paraná, membros da família
              migraram para Toledo, levando consigo a cultura e as tradições
              herdadas dos pioneiros.
            </p>
            <p className="mb-4">
              Segundo o livro &ldquo;OS LEDUR no Brasil&rdquo;, há descendentes
              Ledur em praticamente todo o Brasil: RS, SC, PR (Curitiba, oeste,
              sudoeste, sul), MT, RR, RO, AC, PA, MA, GO, TO, RJ, BA, SP, MG, DF,
              além do Paraguai, Argentina, Itália, EUA e Alemanha. O autor
              percorreu cerca de 50.000 km para reunir a genealogia.
            </p>
            <p>
              Essa dispersão geográfica é testemunho da vitalidade e da
              determinação que caracterizaram os Ledur desde a chegada ao Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Século XX: guerras e continuidade
            </h2>
            <p className="mb-4">
              O livro &ldquo;Da Lorena para o Brasil&rdquo; registra participantes
              da família nas duas guerras mundiais, na Europa: Nikolaus Ledure
              (1893–1917), François Jean Ledur (1894–?), Nicolas Ledur
              (1898–1918), Jean François Nicolas Ledur (1921–1945). São
              descendentes dos ramos que permaneceram na Lorena/Sarre.
            </p>
            <p>
              No Brasil, a família seguiu se expandindo e se reunindo em
              encontros como as Ledur Fest (Cerro Largo, Bom Princípio, Santa
              Terezinha), mantendo vivos os laços e as raízes comuns.
            </p>
          </section>
        </div>

        <nav
          aria-label="Navegação entre páginas"
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/historia/viagem"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            &larr; A Viagem no Olbers
          </Link>
          <Link
            href="/historia/cultura"
            className="text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            Cultura Teuto-Brasileira &rarr;
          </Link>
        </nav>
      </article>
    </main>
  );
}
