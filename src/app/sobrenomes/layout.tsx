import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobrenomes Conectados à Família Ledur",
  description:
    "Mais de 40 sobrenomes ligados à família Ledur por casamento e descendência: Theobald, Harter, Goergen, Kieffer, Scheuer, Contelly e outros, da Lorena ao Rio Grande do Sul.",
  openGraph: {
    title: "Sobrenomes - Família Ledur",
    description:
      "Sobrenomes conectados à família Ledur por casamento e descendência desde 1659.",
  },
};

export default function SobrenomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
