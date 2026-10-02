import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { priorities, record } from "@/lib/campaign";

export const Route = createFileRoute("/priorities")({ component: Priorities });

function Priorities() {
  return (
    <SiteShell>
      <PageIntro kicker="Priorities" title="Study what is working. Assess what needs care.">
        <p>
          Drainage, traffic, public safety, and neighborhood concerns are the focus. On the council,
          Jimmy has worked with the city administration and city staff on the issues residents have
          raised.
        </p>
      </PageIntro>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl text-navy">Work already done, with the city</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {record.map((item) => (
              <article key={item.title} className="grid gap-2 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
                <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                <p className="leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">The work he would carry forward</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {priorities.map((item, index) => (
              <article key={item.title} className="border-t border-gold/50 pt-4">
                <p className="font-display text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-cream">{item.copy}</p>
              </article>
            ))}
          </div>
          <Link
            to="/support"
            className="mt-10 inline-flex h-12 items-center bg-gold px-5 font-semibold text-navy hover:bg-paper"
          >
            I’M INMAN
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
