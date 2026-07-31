"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/features/documentation/lib/docs-nav";
import { cn } from "@/lib/cn";

export function StandardsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      <p className="text-label-md text-accent mb-4">Standards</p>
      {docsNav.map((item) => {
        const href = `/standards/${item.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={item.slug}
            href={href}
            className={cn(
              "px-3 py-2 text-label-md border-l-2 transition-colors",
              active
                ? "border-accent text-indigo font-medium bg-peach/20"
                : "border-transparent text-on-surface-variant hover:text-accent hover:border-accent/40",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
