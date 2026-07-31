import { cn } from "@/lib/cn";

const hoverFill =
  "hover:bg-accent hover:border-accent hover:text-cream";

/**
 * primary / secondary — white or cream backgrounds only.
 * primary = filled indigo. secondary = transparent with indigo border.
 *
 * on-color / on-color-muted — coloured section bands.
 * Transparent with indigo border; hover fills orange with white text.
 */
const variantClasses = {
  primary: cn(
    "bg-indigo text-cream border border-indigo",
    hoverFill,
  ),
  secondary: cn(
    "bg-transparent text-indigo border border-indigo",
    hoverFill,
  ),
  ghost: cn(
    "bg-transparent border border-transparent text-indigo",
    "hover:text-accent",
  ),
  "on-color": cn(
    "bg-transparent text-cream border border-cream",
    hoverFill,
  ),
  "on-color-muted": cn(
    "bg-transparent text-indigo border border-indigo",
    hoverFill,
  ),
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
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-label-md font-medium transition-colors duration-200 cursor-pointer rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantClasses[variant],
    className,
  );
}
