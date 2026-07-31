import { DocsNav } from "@/components/docs/docs-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section-inner w-full pt-12 md:pt-20 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <aside className="md:col-span-3 animate-fade-up">
          <div className="sticky top-24">
            <DocsNav />
          </div>
        </aside>
        <div className="md:col-span-9">
          <article className="prose-openlaw">{children}</article>
        </div>
      </div>
    </div>
  );
}
