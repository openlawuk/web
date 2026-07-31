import Link from "next/link";
import { ArrowForward } from "@/components/ui/arrow-forward";
import { cn } from "@/lib/cn";

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  reverse?: boolean;
  slim?: boolean;
};

function ArrowShape() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 200 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M14 1 H186 A13 13 0 0 1 199 14 V42 A13 13 0 0 1 186 55 H14 A13 13 0 0 1 1 42 V14 A13 13 0 0 1 14 1 Z"
        className="arrow-button-shape"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function ArrowButtonInner({
  children,
  slim,
}: {
  children: React.ReactNode;
  slim?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-3",
        slim ? "px-5 py-3" : "px-6 py-4",
      )}
    >
      <ArrowShape />
      <span className="relative z-10">{children}</span>
      <ArrowForward className="relative z-10" />
    </span>
  );
}

export function ArrowButton({
  href,
  children,
  className,
  external,
  reverse,
  slim,
}: ArrowButtonProps) {
  const classes = cn(
    "arrow-button group inline-flex text-label-md font-medium transition-colors",
    reverse ? "text-cream hover:text-cream" : "text-indigo hover:text-indigo",
    className,
  );

  const inner = <ArrowButtonInner slim={slim}>{children}</ArrowButtonInner>;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
