import { cn } from "@/lib/cn";

type ArrowForwardProps = {
  className?: string;
};

/**
 * Geometric forward arrow sized to sit optically with medium-weight UI text.
 * Scales with font-size via em units; colour via currentColor.
 */
export function ArrowForward({ className }: ArrowForwardProps) {
  return (
    <svg
      className={cn(
        "inline-block shrink-0 align-middle h-[0.7em] w-auto",
        className,
      )}
      viewBox="0 0 23 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.4034 0H13.4887L20.0544 8.28993H0.5V9.7322H20.0448L13.5031 18H15.4178L22.5022 9.00577L15.4034 0Z" />
    </svg>
  );
}
