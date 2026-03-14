import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locais Históricos - Família Ledur",
  description:
    "Locais significativos na história da família Ledur: Grosshemmersdorf, Hombourg-sur-Canner, Bremen, São Leopoldo, Bom Princípio, Feliz, Cerro Largo, Santa Rosa e Toledo.",
  openGraph: {
    title: "Locais Históricos - Família Ledur",
    description:
      "Da Lorena ao Brasil: os lugares que marcaram a trajetória da família Ledur.",
  },
};

export default function LocaisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
