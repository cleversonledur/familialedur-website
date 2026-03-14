"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navLinks } from "./Navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = useCallback((href: string) => {
    setExpandedItem((prev) => (prev === href ? null : href));
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-72 bg-background border-l border-border shadow-xl z-50 transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-serif text-lg font-bold text-primary-dark">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Fechar menu"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 5L15 15M15 5L5 15" />
            </svg>
          </button>
        </div>

        <nav className="py-4 overflow-y-auto h-[calc(100%-65px)]">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.children ? (
                <>
                  <button
                    onClick={() => toggleExpanded(link.href)}
                    className={clsx(
                      "flex items-center justify-between w-full px-6 py-3 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-primary-dark bg-muted"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/60"
                    )}
                  >
                    {link.label}
                    <svg
                      className={clsx(
                        "w-4 h-4 transition-transform duration-200",
                        expandedItem === link.href && "rotate-180"
                      )}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 6L8 10L12 6" />
                    </svg>
                  </button>

                  <div
                    className={clsx(
                      "overflow-hidden transition-all duration-200",
                      expandedItem === link.href
                        ? "max-h-80 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={clsx(
                          "block pl-10 pr-6 py-2.5 text-sm transition-colors",
                          isActive(child.href)
                            ? "text-primary-dark font-medium"
                            : "text-text-muted hover:text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={clsx(
                    "block px-6 py-3 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-primary-dark bg-muted"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/60"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
