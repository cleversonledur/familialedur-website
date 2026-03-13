"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { Place } from "@/lib/types";
import placesData from "@/data/places.json";

const places = placesData as Place[];

export default function LocaisPage() {
  const grouped = useMemo(() => {
    const europeCountries = ["Alemanha", "França"];
    const europe: Place[] = [];
    const brazil: Place[] = [];

    for (const place of places) {
      if (europeCountries.includes(place.country)) {
        europe.push(place);
      } else {
        brazil.push(place);
      }
    }

    return { europe, brazil };
  }, []);

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
            <li className="font-medium text-foreground">Locais</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Locais</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Os lugares que marcaram a trajetória da família Ledur, da Lorena
            europeia até as colônias no sul do Brasil. Cada local carrega um
            capítulo desta história de mais de três séculos.
          </p>
        </header>

        <div className="space-y-16">
          {/* Europa */}
          <section>
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Europa</h2>
              <p className="text-text-muted">
                Os locais de origem na Lorena, Saarland e o porto de partida
                para o Brasil.
              </p>
              <div className="mt-3 w-16 h-1 bg-accent rounded-full" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {grouped.europe.map((place) => (
                <PlaceCard key={place.name} place={place} />
              ))}
            </div>
          </section>

          {/* Brasil */}
          <section>
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Brasil</h2>
              <p className="text-text-muted">
                As cidades e localidades onde a família Ledur se estabeleceu e
                cresceu ao longo de quase dois séculos.
              </p>
              <div className="mt-3 w-16 h-1 bg-accent rounded-full" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {grouped.brazil.map((place) => (
                <PlaceCard key={place.name} place={place} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="rounded-xl border border-border bg-background p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border-light hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold text-primary-dark">
          {place.name}
        </h3>
        <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-text-muted">
          {place.country}
        </span>
      </div>

      {place.region && (
        <p className="mb-2 text-xs font-medium text-accent">
          {place.region}
        </p>
      )}

      <p className="mb-3 text-sm leading-relaxed text-foreground/80">
        {place.description}
      </p>

      <p className="text-xs text-text-muted">
        <span className="font-medium">Período:</span> {place.period}
      </p>
    </article>
  );
}
