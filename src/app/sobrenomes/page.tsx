"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Surname } from "@/lib/types";
import SearchInput from "@/components/ui/SearchInput";
import surnamesData from "@/data/surnames.json";

const surnames = surnamesData as Surname[];

const ORIGIN_FILTERS = [
  { label: "Todas", value: "" },
  { label: "Alemã", value: "German" },
  { label: "Francesa", value: "French" },
  { label: "Lorena", value: "Lorraine" },
] as const;

const ORIGIN_LABELS: Record<string, string> = {
  German: "Alemã",
  French: "Francesa",
  Lorraine: "Lorena",
};

export default function SobrenomesPage() {
  const [search, setSearch] = useState("");
  const [originFilter, setOriginFilter] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();

    return surnames
      .filter((s) => {
        if (originFilter && s.origin !== originFilter) return false;
        if (term && !s.name.toLowerCase().includes(term)) return false;
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [search, originFilter]);

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
            <li className="font-medium text-foreground">Sobrenomes</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Sobrenomes Conectados
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Os sobrenomes que se cruzaram com a família Ledur ao longo de
            séculos, desde as origens na Lorena até as colônias no sul do
            Brasil. Cada nome carrega uma história de aliança e parentesco.
          </p>
        </header>

        <div className="mb-8 space-y-4">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Buscar sobrenome..."
          />

          <div className="flex flex-wrap gap-2">
            {ORIGIN_FILTERS.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setOriginFilter(filter.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  originFilter === filter.value
                    ? "bg-primary text-background"
                    : "bg-muted text-text-muted hover:bg-muted-dark hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-text-muted">
            {filtered.length}{" "}
            {filtered.length === 1 ? "sobrenome encontrado" : "sobrenomes encontrados"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((surname) => (
            <article
              key={surname.name}
              className="rounded-xl border border-border bg-background p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border-light hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h2 className="font-serif text-xl font-bold text-primary-dark">
                  {surname.name}
                </h2>
                <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-text-muted">
                  {ORIGIN_LABELS[surname.origin] ?? surname.origin}
                </span>
              </div>

              {surname.meaning && (
                <p className="mb-2 text-sm italic text-text-muted">
                  {surname.meaning}
                </p>
              )}

              <p className="mb-2 text-sm leading-relaxed text-foreground/80">
                {surname.connection}
              </p>

              {surname.region && (
                <p className="text-xs text-text-muted">
                  <span className="font-medium">Região:</span> {surname.region}
                </p>
              )}
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-text-muted">
              Nenhum sobrenome encontrado com os filtros atuais.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
