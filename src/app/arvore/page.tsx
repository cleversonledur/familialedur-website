"use client";

import dynamic from "next/dynamic";

const FamilyTree = dynamic(() => import("@/components/tree/FamilyTree"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[calc(100vh-140px)] bg-stone-50 rounded-lg border border-stone-200">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-stone-500 text-sm">Carregando árvore genealógica...</p>
      </div>
    </div>
  ),
});

export default function ArvorePage() {
  return (
    <main className="max-w-[1600px] mx-auto px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-stone-900">
          Árvore Genealógica
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Clique em uma pessoa para ver detalhes. Use os botões +/- para
          expandir ou colapsar ramos. Busque por nome no campo de pesquisa.
        </p>
      </div>
      <FamilyTree />
    </main>
  );
}
