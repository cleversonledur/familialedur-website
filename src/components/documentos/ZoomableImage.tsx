"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const MIN_SCALE = 0.5;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.15;

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

function MagnifyingGlassIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" strokeWidth="1.5" />
    </svg>
  );
}

export default function ZoomableImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "100vw",
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      setScale((s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s + delta)));
    },
    []
  );

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const el = containerRef.current;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isOpen, handleWheel]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        panX: pan.x,
        panY: pan.y,
      };
    },
    [scale, pan]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPan({
        x: dragStart.current.panX + (e.clientX - dragStart.current.x),
        y: dragStart.current.panY + (e.clientY - dragStart.current.y),
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isDragging) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-muted/30 transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-contain transition-transform group-hover:scale-[1.02] ${imageClassName}`}
            sizes={sizes}
          />
        </div>
        <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-colors group-hover:bg-black/20">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary-dark shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
            <MagnifyingGlassIcon className="h-7 w-7" />
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fechar"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            ref={containerRef}
            className="relative h-[85vh] w-[90vw] max-w-5xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            style={{
              cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain select-none"
                sizes="90vw"
                draggable={false}
              />
            </div>
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black/50 px-3 py-1 text-xs text-white/80">
            Clique fora ou Esc para fechar · Scroll para zoom · Arraste para
            mover (quando ampliado)
          </p>
        </div>
      )}
    </>
  );
}
