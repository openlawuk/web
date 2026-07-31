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
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-indigo/10">
      <div className="section-inner flex justify-between items-center py-4 relative">
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/"
            className="font-heading text-headline-sm text-indigo tracking-tight hover:text-accent transition-colors"
          >
            Open Law
          </Link>
          <p className="hidden md:block text-label-sm text-on-surface-variant border-l border-indigo/15 pl-4 max-w-[14rem] leading-snug">
            Open standards for legal data portability
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-label-md px-3 py-2 transition-colors relative",
                  active
                    ? "text-accent font-medium"
                    : "text-on-surface-variant hover:text-accent",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/participate"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "hidden md:inline-flex",
            )}
          >
            Join Directory
          </Link>
          <Button
            type="button"
            variant="ghost"
            className="lg:hidden text-indigo px-2"
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
          <div className="absolute top-full inset-x-0 bg-cream border-b border-indigo/10 lg:hidden z-40">
            <div className="section-inner py-4 flex flex-col gap-2">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-label-md py-2 transition-colors",
                    isActive(pathname, item.match)
                      ? "text-accent font-medium"
                      : "text-on-surface-variant hover:text-accent",
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
          </div>
        ) : null}
      </div>
    </header>
  );
}
