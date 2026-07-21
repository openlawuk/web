import Link from "next/link";
import { footerColumns, siteUrls } from "@/lib/site-nav";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative tech-border border-x-0 border-b-0 border-t-secondary/30 mt-auto">
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/10" />
      <div className="node-emerald top-0 left-1/4 -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full py-stack-lg grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin max-w-container-max mx-auto relative z-10">
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="text-headline-sm text-white font-bold tracking-tight">
            Open Law
          </span>
          <p className="text-body-sm text-white/60 max-w-xs">
            The public standards, directory, and trust framework for legal
            practice data portability.
          </p>
          <p className="text-body-sm text-white/40 font-mono text-[11px]">
            © {new Date().getFullYear()} Open Law Project. // SYS.STATUS: ONLINE
          </p>
          <a
            href={siteUrls.githubOrg}
            className="text-body-sm text-white/60 hover:text-secondary-fixed transition-colors w-fit"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-label-caps text-white/40">{column.title}</p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-sm text-white/70 hover:text-secondary-fixed hover:underline decoration-secondary/50 underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
