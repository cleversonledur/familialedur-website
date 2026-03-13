interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark">
        {title}
      </h2>
      <div className="mt-3 mx-auto w-16 h-1 bg-accent rounded-full" />
      {subtitle && (
        <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
