"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/docs-nav";
import { cn } from "@/lib/cn";

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      <p className="text-label-caps text-on-surface-variant mb-3">
        Documentation
      </p>
      {docsNav.map((item) => {
        const href = `/docs/${item.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={item.slug}
            href={href}
            className={cn(
              "px-3 py-2 text-label-md border-l-2 transition-colors",
              active
                ? "border-brand-emerald text-brand-navy font-semibold bg-brand-emerald/5"
                : "border-transparent text-on-surface-variant hover:text-brand-navy hover:border-outline-variant",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
