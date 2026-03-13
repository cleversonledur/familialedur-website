import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cidadania Alemã",
  description:
    "Informações sobre cidadania alemã por descendência e o caso da família Ledur.",
};

export default function CidadaniaAlemaPage() {
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
            <li className="font-medium text-foreground">Cidadania Alemã</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Cidadania Alemã
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            O caso Ledur e a possibilidade de cidadania alemã por descendência.
          </p>
        </header>

        {/* Aviso Legal */}
        <div className="mb-12 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <p className="text-sm font-medium text-accent">Aviso Legal</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Este conteúdo é meramente informativo e não constitui assessoria
            jurídica. Consulte um advogado especializado para orientação sobre
            seu caso específico.
          </p>
        </div>

        <div className="space-y-16">
          {/* Jus Sanguinis */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Jus Sanguinis
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A Alemanha adota o princípio do <em>jus sanguinis</em>{" "}
                (direito de sangue) como base para a concessão de cidadania.
                Isso significa que a nacionalidade alemã é transmitida dos pais
                para os filhos, independentemente do local de nascimento.
              </p>
              <p>
                Diferentemente de países que adotam o <em>jus soli</em>{" "}
                (direito de solo), onde basta nascer no território para ter
                direito à cidadania, o sistema alemão reconhece a cidadania
                transmitida por gerações, desde que a cadeia de transmissão
                não tenha sido interrompida.
              </p>
              <p>
                A interrupção pode ocorrer por diversos motivos: naturalização
                voluntária em outro país antes de determinadas datas,
                perda por ausência prolongada do território alemão (em
                legislações anteriores), ou lacunas documentais que impeçam
                a comprovação da linhagem.
              </p>
            </div>
          </section>

          {/* A Linha Ledur */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              A Linha Ledur
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Michel Ledur nasceu em 04 de fevereiro de 1797 em
                Grosshemmersdorf, uma localidade no Saarland, região que na
                época encontrava-se sob administração prussiana. Ele emigrou
                para o Brasil em 1828, embarcando no navio Olbers no porto
                de Bremen.
              </p>
              <p>
                Um ponto central para a análise da cidadania é que Michel
                emigrou <strong>antes</strong> do estabelecimento do Estado
                alemão moderno, que só ocorreu com a unificação em 1871. Na
                época de sua partida, não existia uma &ldquo;cidadania
                alemã&rdquo; no sentido contemporâneo, mas sim a condição de
                súdito de um dos estados germânicos.
              </p>
              <p>
                No entanto, a legislação alemã sobre cidadania reconhece,
                em determinadas circunstâncias, a condição de súdito de
                estados que vieram a compor o Império Alemão como precursora
                da cidadania alemã. Isso torna o caso Ledur juridicamente
                complexo e dependente de análise detalhada.
              </p>
            </div>
          </section>

          {/* A Questão da Lorena */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              A Questão da Lorena
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A região da Lorena, onde a família Ledur viveu por gerações,
                teve uma história conturbada de alternância entre soberania
                francesa e germânica. Grosshemmersdorf, local de nascimento
                de Michel, situa-se na área do Saarland, próxima à fronteira
                entre os dois países.
              </p>
              <p>
                Após as Guerras Napoleônicas, o Tratado de Paris de 1815
                redesenhou as fronteiras europeias. A região do Saarland foi
                colocada sob controle prussiano. Quando Michel nasceu, em 1797,
                a área passava por um período de transição política, e quando
                emigrou em 1828, a região já estava firmemente sob
                administração da Prússia.
              </p>
              <p>
                A questão central é determinar se Michel era considerado
                súdito de um estado germânico (especificamente a Prússia) no
                momento da emigração. A resposta depende de análise documental
                e jurídica cuidadosa, levando em conta os tratados da época
                e os registros administrativos disponíveis.
              </p>
              <p>
                Cabe ressaltar que a região continuou disputada: o Saarland
                foi administrado pela França após a Primeira Guerra Mundial,
                devolvido à Alemanha em 1935, novamente separado após a
                Segunda Guerra Mundial, e finalmente reintegrado à Alemanha
                Ocidental em 1957.
              </p>
            </div>
          </section>

          {/* Documentos Necessários */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Documentos Necessários
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Para um processo de cidadania alemã por descendência, é
                necessário comprovar a linhagem ininterrupta desde o ancestral
                alemão. Os principais documentos incluem:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Certidões de nascimento, casamento e óbito</strong>{" "}
                  de cada geração da cadeia, do ancestral alemão até o
                  requerente.
                </li>
                <li>
                  <strong>Registros eclesiásticos (Kirchenbuch)</strong> -
                  livros paroquiais, especialmente de paróquias católicas na
                  Lorena e no Saarland, que documentam batismos, casamentos
                  e óbitos anteriores ao registro civil.
                </li>
                <li>
                  <strong>Registros civis (Standesamt)</strong> - registros
                  de cartório civil na Alemanha, disponíveis a partir de
                  meados do século XIX.
                </li>
                <li>
                  <strong>Prova de não-naturalização</strong> - documentação
                  demonstrando que o ancestral não renunciou voluntariamente
                  à condição de súdito/cidadão alemão.
                </li>
                <li>
                  <strong>Documentos brasileiros</strong> - certidões de
                  nascimento, casamento e óbito de cada geração no Brasil,
                  devidamente apostiladas.
                </li>
              </ul>
            </div>
          </section>

          {/* Arquivos e Fontes */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Arquivos e Fontes
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A pesquisa documental para o caso Ledur envolve fontes em
                vários países e instituições:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <h3 className="font-serif text-lg font-semibold text-primary-dark">
                    Standesamt
                  </h3>
                  <p className="mt-2 text-sm">
                    Cartórios de registro civil na Alemanha. Cada município
                    possui seu Standesamt com registros de nascimento,
                    casamento e óbito. Para o caso Ledur, o Standesamt
                    relevante é o da região de Grosshemmersdorf/Saarland.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <h3 className="font-serif text-lg font-semibold text-primary-dark">
                    Kirchenbuch
                  </h3>
                  <p className="mt-2 text-sm">
                    Registros paroquiais, especialmente de paróquias católicas.
                    Anteriores ao registro civil, são a principal fonte para
                    documentar nascimentos, casamentos e óbitos nos séculos
                    XVII e XVIII.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <h3 className="font-serif text-lg font-semibold text-primary-dark">
                    Archives de la Moselle
                  </h3>
                  <p className="mt-2 text-sm">
                    Os Archives departementales de la Moselle, em Metz,
                    guardam registros da região da Lorena francesa, incluindo
                    documentos de Hombourg-sur-Canner e outras localidades
                    onde a família viveu.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <h3 className="font-serif text-lg font-semibold text-primary-dark">
                    Landesarchiv Saarbruecken
                  </h3>
                  <p className="mt-2 text-sm">
                    O arquivo estadual do Saarland, em Saarbruecken, contém
                    documentos históricos da região, incluindo registros
                    administrativos, censos e documentos relacionados à
                    emigração no século XIX.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Passos Práticos */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Passos Práticos
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                O processo de requerimento de cidadania alemã por descendência
                envolve as seguintes etapas gerais:
              </p>
              <ol className="ml-6 list-decimal space-y-3">
                <li>
                  <strong>Levantamento genealógico</strong> - Reunir todas as
                  informações disponíveis sobre a linhagem, desde o ancestral
                  alemão até o requerente. Identificar cada geração e os
                  documentos existentes.
                </li>
                <li>
                  <strong>Coleta documental</strong> - Obter certidões de
                  nascimento, casamento e óbito de cada geração. No Brasil,
                  solicitar segundas vias em cartórios. Na Alemanha e França,
                  contatar os arquivos e cartórios relevantes.
                </li>
                <li>
                  <strong>Análise jurídica preliminar</strong> - Consultar um
                  advogado especializado em cidadania alemã para avaliar a
                  viabilidade do caso, considerando as particularidades
                  históricas e legais.
                </li>
                <li>
                  <strong>Tradução e apostilamento</strong> - Traduzir todos
                  os documentos brasileiros para o alemão por tradutor
                  juramentado e providenciar o apostilamento conforme a
                  Convenção de Haia.
                </li>
                <li>
                  <strong>Protocolo do requerimento</strong> - Apresentar o
                  pedido ao Bundesverwaltungsamt (BVA) ou à representação
                  consular alemã competente, acompanhado de toda a
                  documentação.
                </li>
                <li>
                  <strong>Acompanhamento</strong> - O processo pode levar
                  meses ou anos. Eventuais pedidos de documentação adicional
                  devem ser atendidos prontamente.
                </li>
              </ol>
            </div>
          </section>

          {/* Assessoria Especializada */}
          <section>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Assessoria Especializada
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Para auxiliar no processo de cidadania alemã, recomendamos a{" "}
                <strong>Dra. Rafaela Kohnert</strong>, advogada, Mestre em
                Direito e Especialista em Direito Internacional das Imigrações.
                A Dra. Rafaela já possui experiência direta com o caso da
                família Ledur e conhece as particularidades da nossa linhagem,
                incluindo as questões históricas envolvendo a região da Lorena
                e do Saarland.
              </p>
              <p>
                Através da{" "}
                <a
                  href="https://rkinternacional.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
                >
                  RK Internacional
                </a>
                , ela oferece suporte completo: análise de viabilidade,
                levantamento documental, comunicação com órgãos alemães,
                preenchimento de formulários, organização do processo e
                protocolo junto ao Bundesverwaltungsamt (BVA).
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://rkinternacional.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  Site RK Internacional
                </a>
                <a
                  href="https://www.instagram.com/rafaelakohnert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  @rafaelakohnert
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-serif text-lg font-semibold text-primary-dark">
                Saiba mais sobre cidadania alemã
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.youtube.com/embed/yJyiiUxVrwE"
                  title="Cidadania Alemã - Saiba mais"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </section>

          {/* Aviso Legal Final */}
          <section>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <h2 className="mb-3 text-xl font-bold text-accent">
                Aviso Legal
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                As informações apresentadas nesta página são de caráter
                exclusivamente informativo e não constituem assessoria
                jurídica. A legislação sobre cidadania alemã é complexa e
                sofre alterações periódicas. Cada caso possui
                particularidades que devem ser analisadas individualmente
                por um profissional habilitado. Consulte um advogado
                especializado em direito de nacionalidade alemã para
                orientação sobre seu caso específico.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
