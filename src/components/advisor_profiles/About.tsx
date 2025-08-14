interface AboutProps {
  title: string;
  description: string;
  className?: string;
}

export function About({ title, description, className = "" }: AboutProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
