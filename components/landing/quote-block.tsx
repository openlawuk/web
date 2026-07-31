export function QuoteBlock() {
  return (
    <section className="section-full-bleed section-green py-module">
      <div className="section-inner max-w-3xl">
        <blockquote className="font-heading text-headline-md md:text-headline-lg text-cream leading-snug">
          &ldquo;Open standards give clients and firms a shared language for
          trust — without locking practice data behind a single vendor.&rdquo;
        </blockquote>
        <footer className="mt-8 flex flex-col gap-1">
          <cite className="text-body-md text-lime not-italic font-medium">
            Open Law Project
          </cite>
          <p className="text-body-sm text-cream">
            Public standards for legal practice data portability
          </p>
        </footer>
      </div>
    </section>
  );
}
