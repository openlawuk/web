"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export type FilterTab = {
  href: string;
  label: string;
  match: string;
};

type FilterTabsProps = {
  tabs: readonly FilterTab[];
  className?: string;
};

export function FilterTabs({ tabs, className }: FilterTabsProps) {
  const pathname = usePathname();

  function isActive(match: string) {
    if (match === "/ecosystem") {
      return pathname === "/ecosystem";
    }
    return pathname === match || pathname.startsWith(`${match}/`);
  }

  return (
    <nav
      className={cn("flex flex-wrap gap-2", className)}
      aria-label="Filter"
    >
      {tabs.map((tab) => {
        const active = isActive(tab.match);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "px-4 py-2 text-label-md border transition-colors",
              active
                ? "bg-indigo text-cream border-indigo"
                : "bg-transparent text-indigo border-indigo hover:border-accent hover:text-accent",
            )}
            aria-current={active ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
