import Link from "next/link";
import { footerColumns } from "@/lib/site-nav";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

export function Footer() {
  return (
    <footer className="section-full-bleed section-indigo pb-module">
      <div className="section-inner pt-module grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="font-heading text-headline-sm text-cream tracking-tight">
            Open Law
          </span>
          <p className="text-body-sm text-cream/70 max-w-xs">
            The public standards, directory, and trust framework for legal
            practice data portability.
          </p>
          <p className="text-body-sm text-cream/50">
            © {new Date().getFullYear()} Open Law
          </p>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-label-sm text-cream/50 uppercase tracking-wide">
                {column.title}
              </p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-sm text-cream/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <NewsletterSignup />
        </div>
      </div>
    </footer>
  );
}
