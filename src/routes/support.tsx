import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { VolunteerForm } from "@/components/volunteer-form";
import { election, ways } from "@/lib/campaign";

export const Route = createFileRoute("/support")({ component: Support });

function Support() {
  return (
    <SiteShell>
      <PageIntro kicker="Support" title="This campaign begins with you">
        <p>
          Tell a neighbor. Host a coffee. Walk a block. Jimmy will spend the coming months walking
          neighborhoods, listening to residents and businesses, and laying out a more detailed
          platform.
        </p>
      </PageIntro>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {ways.map((item) => (
            <article key={item.title}>
              <h2 className="font-display text-2xl text-navy">{item.title}</h2>
              <p className="mt-2 leading-relaxed">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-16">
        <div>
          <h2 className="font-display text-4xl text-navy">I’M INMAN</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Leave a note here. It stays in this browser. You can also call the campaign at (985) 801-9750.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line text-sm leading-relaxed">
            <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-navy">Register</dt>
              <dd>In person or by mail, by {election.registration}</dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-navy">Early voting</dt>
              <dd>{election.earlyVoting}</dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-navy">Primary</dt>
              <dd>{election.primary}</dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-navy">General, if needed</dt>
              <dd>{election.general}</dd>
            </div>
          </dl>
        </div>
        <VolunteerForm />
      </section>
    </SiteShell>
  );
}
