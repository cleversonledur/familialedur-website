"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-30 transition-all duration-300
        ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-primary-dark flex items-center justify-center overflow-hidden">
              <span className="relative z-10 text-background/95 font-serif font-bold text-base tracking-tight">
                L
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary-dark tracking-tight leading-none group-hover:text-primary transition-colors">
                Família Ledur
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted leading-none mt-0.5">
                Genealogia
              </span>
            </div>
          </Link>

          <Navigation />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Abrir menu"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7H20M4 12H16M4 17H20" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
