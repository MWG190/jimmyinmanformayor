import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { election } from "@/lib/campaign";

export const Route = createFileRoute("/news")({ component: News });

function News() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">For immediate release</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-navy sm:text-5xl">
          Covington Councilman Jimmy Inman announces candidacy for Mayor
        </h1>
        <p className="mt-4 text-sm font-semibold tracking-wide text-muted uppercase">
          October 2, 2026 · Covington, Louisiana
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Educator, coach, Navy veteran, and District D representative says the city needs a mayor
          who will be a steward for our future.
        </p>
        <img
          src="/photos/headshot.jpg"
          alt="Jimmy Inman"
          className="mt-8 aspect-4/5 w-full max-w-xs object-cover object-top"
        />
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Covington City Councilman Jimmy Inman announced that he will be a candidate for Mayor of
            Covington in the 2027 municipal election. Inman, 57, has represented District D since
            2023.
          </p>
          <p>
            “Covington, like our stately oaks, has not only survived. It has flourished,” Inman said.
            “Folks have told me they want a mayor who will continue to lead our community into the
            future. That will soon be the task at hand, and I believe that I’m equipped to be
            successful in that role.”
          </p>
          <p>
            He framed the campaign around three words he has used for years in classrooms and on the
            sideline: community, continuity, and commitment. “Community is the past that we have
            inherited. It helps to define who we are as a city. Continuity is utilizing those
            long-term relationships to assist with the extensive work that we are undertaking.
            Commitment is how we keep that progress going into the future.”
          </p>
          <p>
            “A coach’s mindset is process driven,” he continued. “You do not abandon a winning
            formula. You study it. You embrace it. And when an item needs to be assessed, you take a
            diligent, comprehensive approach.”
          </p>
          <p>
            His relationships in Covington do not simply go back decades. They go back generations,
            formed in the pew, on the field, in the classroom, and around kitchen tables. Drainage,
            traffic, public safety, and neighborhood concerns are his focus. He believes those
            relationships will lead to the kind of communication the mayor’s office requires.
          </p>
          <p>
            On the council he has worked with the city administration and city staff on Mile Branch, a corridor study of Tyler Street and Jefferson Avenue, drainage along Mile
            Branch, Blue Swamp, Simpson, St. Paul, MLK, and Mackie creeks, and public safety with the
            Covington Police Department.
          </p>
          <p>
            The municipal primary is {election.primary}. A municipal general, if no one wins outright,
            is {election.general}. Inman said he will spend the coming months walking neighborhoods,
            listening to residents and businesses, and laying out a more detailed platform.
          </p>
          <p className="font-display text-2xl leading-snug text-navy">
            “I am not running against anyone. I am running for Covington and the incredibly important
            position of Mayor.”
          </p>
        </div>
        <Link
          to="/support"
          className="mt-8 inline-flex h-12 items-center bg-gold px-5 font-semibold text-navy hover:bg-navy hover:text-paper"
        >
          I’M INMAN
        </Link>
      </article>
    </SiteShell>
  );
}
