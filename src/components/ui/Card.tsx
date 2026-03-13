import { type ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  children,
  className = "",
  onClick,
}: CardProps) {
  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      className={`bg-background border border-border rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-border-light hover:-translate-y-0.5 ${onClick ? "cursor-pointer text-left w-full" : ""} ${className}`}
    >
      {title && (
        <h3 className="font-serif text-lg font-semibold text-primary-dark mb-3">
          {title}
        </h3>
      )}
      <div className="text-foreground/80 text-sm leading-relaxed">
        {children}
      </div>
    </Component>
  );
}
