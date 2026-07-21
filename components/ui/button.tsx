"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import {
  buttonVariants,
  type ButtonVariant,
} from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export { buttonVariants } from "@/components/ui/button-variants";

type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
