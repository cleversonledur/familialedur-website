"use client";

import { useState, useRef } from "react";

interface TreeControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onSearch: (query: string) => void;
  searchResults: string[];
  currentSearchIndex: number;
  onNextResult: () => void;
  onPrevResult: () => void;
}

export default function TreeControls({
  onZoomIn,
  onZoomOut,
  onReset,
  onSearch,
  searchResults,
  currentSearchIndex,
  onNextResult,
  onPrevResult,
}: TreeControlsProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(query);
  }

  function handleChange(value: string) {
    setQuery(value);
    if (!value.trim()) {
      onSearch("");
    }
  }

  return (
    <div className="absolute left-4 top-4 z-20 flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex gap-1">
        <div className="relative">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Buscar por nome..."
            className="w-56 pl-9 pr-3 py-2 text-sm rounded-lg border border-stone-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 shadow-sm transition-colors"
        >
          Buscar
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="flex items-center gap-2 bg-white rounded-lg border border-stone-200 px-3 py-1.5 shadow-sm">
          <span className="text-xs text-stone-600">
            {currentSearchIndex + 1} de {searchResults.length}
          </span>
          <button
            onClick={onPrevResult}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 text-stone-600"
            aria-label="Resultado anterior"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 10L4 6l4-4" />
            </svg>
          </button>
          <button
            onClick={onNextResult}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 text-stone-600"
            aria-label="Próximo resultado"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 2l4 4-4 4" />
            </svg>
          </button>
        </div>
      )}

      <div className="flex gap-1">
        <button
          onClick={onZoomIn}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-stone-300 shadow-sm hover:bg-stone-50 text-stone-700 text-lg font-bold transition-colors"
          aria-label="Aumentar zoom"
        >
          +
        </button>
        <button
          onClick={onZoomOut}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-stone-300 shadow-sm hover:bg-stone-50 text-stone-700 text-lg font-bold transition-colors"
          aria-label="Diminuir zoom"
        >
          -
        </button>
        <button
          onClick={onReset}
          className="px-3 h-9 flex items-center justify-center rounded-lg bg-white border border-stone-300 shadow-sm hover:bg-stone-50 text-stone-700 text-xs font-medium transition-colors"
          aria-label="Resetar visualização"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
