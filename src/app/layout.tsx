import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://familialedur.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Família Ledur - Genealogia e História desde 1659",
    template: "%s | Família Ledur",
  },
  description:
    "História e genealogia da família Ledur, da Lorena (França/Alemanha) ao Rio Grande do Sul. Árvore genealógica com mais de 2000 pessoas, documentos históricos, sobrenomes e informações sobre cidadania alemã.",
  keywords: [
    "família Ledur",
    "genealogia Ledur",
    "Ledur genealogia",
    "Ledur Brasil",
    "imigração alemã Brasil",
    "imigração alemã Rio Grande do Sul",
    "navio Olbers",
    "São Leopoldo 1829",
    "Grosshemmersdorf",
    "Lorena",
    "Harter Ledur",
    "colonização alemã RS",
    "Bom Princípio",
    "cidadania alemã descendência",
    "árvore genealógica Ledur",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Família Ledur",
    title: "Família Ledur - Genealogia e História desde 1659",
    description:
      "Da Lorena ao Rio Grande do Sul: genealogia, documentos históricos e árvore com mais de 2000 descendentes de Michel Ledur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Família Ledur - Genealogia e História desde 1659",
    description:
      "Da Lorena ao Rio Grande do Sul: genealogia, documentos históricos e árvore com mais de 2000 descendentes de Michel Ledur.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Família Ledur",
                  description:
                    "História e genealogia da família Ledur, da Lorena ao Rio Grande do Sul.",
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Família Ledur",
                  url: SITE_URL,
                  description:
                    "Projeto genealógico da família Ledur, preservando a memória desde Joachim Harter (1659) na Lorena até os descendentes no Brasil.",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
