import { cn } from "@/lib/cn";

const variantClasses = {
  primary:
    "bg-gradient-brand text-white shadow-md shadow-brand-emerald/20 hover:opacity-90 border-0",
  secondary:
    "bg-white/80 backdrop-blur-sm border border-secondary/30 text-brand-navy hover:border-secondary hover:bg-secondary/5",
  ghost:
    "bg-transparent border border-transparent text-secondary hover:text-tertiary hover:border-secondary/30",
} as const;

export type ButtonVariant = keyof typeof variantClasses;

export type VariantProps = {
  variant?: ButtonVariant;
};

export function buttonVariants({
  variant = "primary",
  className,
}: VariantProps & { className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-1 px-4 py-2 font-sans text-label-caps tracking-[0.05em] font-semibold transition-all relative cursor-pointer rounded-DEFAULT disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    className,
  );
}
