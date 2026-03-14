import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Árvore Genealógica Interativa - Família Ledur",
  description:
    "Árvore genealógica interativa com mais de 2000 descendentes de Michel Ledur e Margaretha Theobald, desde a chegada ao Brasil em 1829 até as gerações atuais.",
  openGraph: {
    title: "Árvore Genealógica - Família Ledur",
    description:
      "Explore a árvore interativa com mais de 2000 descendentes de Michel Ledur.",
  },
};

export default function ArvoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
