import Link from "next/link";
import { ArrowForward } from "@/components/ui/arrow-forward";
import { cn } from "@/lib/cn";

type ContentCardProps = {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
  tone?: "cream" | "lime" | "peach" | "sky" | "green" | "indigo";
  external?: boolean;
  className?: string;
};

const toneClasses = {
  cream: "bg-cream text-indigo",
  lime: "bg-lime text-indigo",
  peach: "bg-peach text-indigo",
  sky: "bg-sky text-indigo",
  green: "bg-green text-cream",
  indigo: "bg-indigo text-cream",
} as const;

export function ContentCard({
  href,
  title,
  description,
  eyebrow,
  tone = "cream",
  external,
  className,
}: ContentCardProps) {
  const cardClass = cn(
    "group flex flex-col h-full transition-transform hover:-translate-y-0.5",
    className,
  );

  const inner = (
    <>
      <div
        className={cn(
          "min-h-[140px] p-6 flex flex-col justify-end",
          toneClasses[tone],
        )}
      >
        {eyebrow ? (
          <p className="text-label-sm opacity-70 mb-2">{eyebrow}</p>
        ) : null}
        <h3 className="font-heading text-headline-sm">{title}</h3>
      </div>
      <div className="flex-1 p-6 bg-cream">
        <p className="text-body-md text-on-surface-variant">{description}</p>
        <span className="inline-flex items-center gap-2 mt-4 text-label-md text-indigo group-hover:text-accent transition-colors">
          Learn more
          <ArrowForward />
        </span>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cardClass}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClass}>
      {inner}
    </Link>
  );
}
