import { ArrowButton } from "@/components/ui/arrow-button";

export function DirectoryIntro() {
  return (
    <section className="section-full-bleed section-green py-module">
      <div className="section-inner">
        <div className="max-w-2xl flex flex-col gap-5">
          <p className="text-label-md text-lime">Trust anchor</p>
          <h2 className="font-heading text-headline-md md:text-headline-lg text-cream tracking-tight">
            Introducing the Open Law Directory
          </h2>
          <p className="text-body-lg text-cream/80">
            Register participants, publish JWKS, and issue Software Statement
            Assertions (SSAs). Client-facing apps present an SSA at Dynamic
            Client Registration — without firm allowlisting for open marketplace
            access.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            <ArrowButton href="/docs/directory" reverse slim>
              Directory docs
            </ArrowButton>
            <ArrowButton href="/ecosystem" reverse slim>
              Explore ecosystem
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
