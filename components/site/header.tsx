"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { mainNav } from "@/lib/site-nav";
import { cn } from "@/lib/cn";

function isActive(pathname: string, match: string) {
  if (match === "/") {
    return pathname === "/";
  }
  return pathname === match || pathname.startsWith(`${match}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-brand-navy/10 flex justify-between items-center w-full px-margin-mobile md:px-margin py-4 max-w-container-max mx-auto tech-border border-t-0">
      <div className="corner-accent-br" />
      <div className="node-sky -bottom-1 -right-1" />

      <Link
        href="/"
        className="relative z-10 text-headline-sm font-bold text-brand-navy tracking-tight"
      >
        Open Law
      </Link>

      <nav className="hidden lg:flex items-center gap-1 relative z-10" aria-label="Primary">
        {mainNav.map((item) => {
          const active = isActive(pathname, item.match);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-label-caps px-3 py-2 transition-colors relative",
                active
                  ? "text-brand-emerald font-bold"
                  : "text-on-surface-variant hover:text-brand-navy",
              )}
              aria-current={active ? "page" : undefined}
            >
              <span className="inline-flex items-center gap-2">
                {item.label}
                {active ? (
                  <span className="w-1 h-1 bg-brand-emerald rounded-full" />
                ) : null}
              </span>
              {active ? (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-emerald" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4 relative z-10">
        <Link
          href="/participate"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "hidden md:inline-flex",
          )}
        >
          <span className="corner-accent-tl border-white" />
          Join Directory
        </Link>
        <Button
          type="button"
          variant="ghost"
          className="lg:hidden text-brand-navy px-2"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </Button>
      </div>

      {open ? (
        <div className="absolute top-full inset-x-0 bg-white/95 backdrop-blur-md border-b border-brand-navy/10 lg:hidden z-40 px-margin-mobile py-4 flex flex-col gap-2">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-label-caps py-2",
                isActive(pathname, item.match)
                  ? "text-brand-emerald font-bold"
                  : "text-on-surface-variant",
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/participate"
            className={buttonVariants({ variant: "primary" })}
            onClick={() => setOpen(false)}
          >
            Join Directory
          </Link>
        </div>
      ) : null}
    </header>
  );
}
