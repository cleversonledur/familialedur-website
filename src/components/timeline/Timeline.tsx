"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TimelineEvent } from "@/lib/types";
import timelineEvents from "@/data/timeline-events.json";

const CATEGORY_CONFIG: Record<
  TimelineEvent["category"],
  { label: string; color: string; bgClass: string }
> = {
  europe: { label: "Europa", color: "#B45309", bgClass: "bg-amber-600" },
  migration: { label: "Imigração", color: "#2563EB", bgClass: "bg-blue-600" },
  brazil: { label: "Brasil", color: "#15803D", bgClass: "bg-green-700" },
  family: { label: "Família", color: "#6B3A2A", bgClass: "bg-primary" },
};

const ALL_CATEGORIES: TimelineEvent["category"][] = [
  "europe",
  "migration",
  "brazil",
  "family",
];

function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const { bgClass } = CATEGORY_CONFIG[event.category];

  return (
    <div
      ref={cardRef}
      className={`
        relative flex items-start
        mb-6 md:mb-10
        md:w-[calc(50%-24px)]
        ${isLeft ? "md:self-start md:text-right" : "md:self-end md:text-left"}
        pl-10 md:pl-0
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Dot on the timeline */}
      <div
        className={`
          absolute z-10
          left-0 md:left-auto
          ${isLeft ? "md:right-0 md:translate-x-[calc(50%+24px)]" : "md:left-0 md:-translate-x-[calc(50%+24px)]"}
          top-5
          w-3 h-3 rounded-full ${bgClass}
          ring-4 ring-background
          -translate-x-1.5
        `}
      />

      {/* Connector line to center */}
      <div
        className={`
          hidden md:block absolute top-[25px] h-px bg-border/60
          ${isLeft ? "right-0 w-6 translate-x-full" : "left-0 w-6 -translate-x-full"}
        `}
      />

      {/* Card */}
      <article className="w-full rounded-lg bg-surface border border-border/50 p-5 hover:border-border transition-colors duration-300 shadow-sm">
        <div className={`flex items-baseline gap-3 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
          <time className="font-serif text-xl font-bold text-accent">
            {event.year}
          </time>
          <span className={`inline-block w-2 h-2 rounded-full ${bgClass} shrink-0`} />
        </div>
        <h3 className="font-serif text-base font-semibold text-primary-dark mb-1.5 leading-snug">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {event.description}
        </p>
      </article>
    </div>
  );
}

interface TimelineProps {
  limit?: number;
}

export default function Timeline({ limit }: TimelineProps) {
  const [activeCategories, setActiveCategories] = useState<
    Set<TimelineEvent["category"]>
  >(new Set(ALL_CATEGORIES));
  const [expanded, setExpanded] = useState(false);

  const toggleCategory = useCallback(
    (category: TimelineEvent["category"]) => {
      setActiveCategories((prev) => {
        const next = new Set(prev);
        if (next.has(category)) {
          if (next.size === 1) return prev;
          next.delete(category);
        } else {
          next.add(category);
        }
        return next;
      });
    },
    []
  );

  const allFiltered = (timelineEvents as TimelineEvent[]).filter((e) =>
    activeCategories.has(e.category)
  );

  const shouldLimit = limit !== undefined && !expanded && allFiltered.length > limit;
  const events = shouldLimit ? allFiltered.slice(0, limit) : allFiltered;
  const hiddenCount = allFiltered.length - events.length;

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ALL_CATEGORIES.map((category) => {
          const config = CATEGORY_CONFIG[category];
          const isActive = activeCategories.has(category);
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`
                flex items-center gap-2 px-4 py-1.5 rounded-full
                text-xs font-medium tracking-wide uppercase transition-all duration-200
                border cursor-pointer
                ${
                  isActive
                    ? "border-primary/30 bg-surface text-primary-dark shadow-sm"
                    : "border-transparent bg-muted/50 text-text-muted/60"
                }
                hover:border-primary/30 hover:text-primary-dark
              `}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full transition-opacity ${config.bgClass} ${isActive ? "opacity-100" : "opacity-40"}`}
              />
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-start md:items-center">
        {/* Vertical line */}
        <div
          className="
            absolute
            left-[5px] md:left-1/2
            top-0 bottom-0
            w-px bg-border/70
            md:-translate-x-px
          "
        />

        {events.map((event, index) => (
          <TimelineCard
            key={`${event.year}-${event.title}`}
            event={event}
            index={index}
          />
        ))}

        {/* End cap or expand button */}
        {shouldLimit ? (
          <button
            onClick={() => setExpanded(true)}
            className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-border/60 text-sm font-medium text-primary-dark hover:border-primary/30 hover:shadow-sm transition-all duration-200 cursor-pointer ml-4 md:ml-0"
          >
            Ver mais {hiddenCount} eventos
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5L7 9L11 5" />
            </svg>
          </button>
        ) : (
          <div className="relative z-10 w-3 h-3 rounded-full bg-border ring-4 ring-surface-warm ml-[1px] md:ml-0" />
        )}
      </div>
    </div>
  );
}
