import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function CtaLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const className = cn(buttonVariants({ variant }));
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <header className="py-12 md:py-20 max-w-3xl animate-fade-up">
      <p className="text-label-md text-accent mb-4">{eyebrow}</p>
      <h1 className="font-heading text-headline-lg-mobile md:text-headline-lg text-indigo tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-8">{description}</p>
      {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
        <div className="flex flex-wrap gap-4">
          {primaryHref && primaryLabel ? (
            <CtaLink
              href={primaryHref}
              label={primaryLabel}
              variant="primary"
            />
          ) : null}
          {secondaryHref && secondaryLabel ? (
            <CtaLink
              href={secondaryHref}
              label={secondaryLabel}
              variant="secondary"
            />
          ) : null}
        </div>
      ) : null}
    </header>
  );
}

export function pageMetadata(
  title: string,
  description: string,
): Metadata {
  return { title, description };
}
