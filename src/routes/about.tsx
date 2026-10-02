import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { StatStrip } from "@/components/stat-strip";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <SiteShell>
      <PageIntro kicker="About" title="A lifetime in this town">
        <p>
          James “Jimmy” Inman, 57, has represented District D since 2023. He and his wife, Gina, live
          in Lakewood Northshore. Covington has been home since 1973. The next mayor takes office July 1,
          2027.
        </p>
      </PageIntro>

      <StatStrip />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            Marsha Jourdan moved Jimmy and his brother to Covington in 1973. He graduated from
            Covington High School in 1987, then served on active duty in the U.S. Navy aboard the
            USS Comte de Grasse. After his honorable discharge, he graduated from Southeastern
            Louisiana University in Hammond and was hired by his alma mater, Covington High.
          </p>
          <p>
            He has spent 32 years as an educator and has also taught driver’s education. He coached
            boys’ soccer at CHS for 25 years, then volunteered as a coach at the CYSA youth soccer
            complex for a decade. Jimmy “Coach” Inman still works on staff at CHS and will continue
            until his retirement in January 2027.
          </p>
          <p>
            He and Gina were married at St. Peter Catholic Church in 1991. They raised their sons,
            Austin and Mason, between homes in Covington Point and River Forest. The couple now lives
            in Lakewood Northshore. All three Inman men are Covington High alumni.
          </p>
          <p>
            The relationships do not simply go back decades. They go back generations, formed in the
            pew, on the field, in the classroom, and around kitchen tables. Jimmy was taught at Covington
            Middle. Gina taught at C.J. Schoen. Both worked under Buck McKee, a River Forest neighbor for nearly two decades. He sees those ties as an asset at
            city hall: clearer communication on drainage, traffic, public safety, and neighborhood
            concerns.
          </p>
          <p className="font-display text-2xl leading-snug text-navy">
            “I have been blessed to teach in our community, coach children from our area, and
            represent our residents. This city gave my family a home. I want to ensure that Covington
            continues to be a place that people desire to call home themselves.”
          </p>
          <Link
            to="/priorities"
            className="inline-flex h-12 items-center bg-navy px-5 text-base font-semibold text-paper hover:bg-gold hover:text-navy"
          >
            See the priorities
          </Link>
        </div>
        <div className="grid content-start gap-4">
          <img
            src="/photos/graduation.jpg"
            alt="Jimmy Inman in academic regalia with a St. Tammany graduate"
            className="w-full object-cover"
          />
          <div className="grid grid-cols-2 gap-4">
            <img src="/photos/family-stadium.jpg" alt="Jimmy and Gina at a night game" className="aspect-square w-full object-cover" />
            <img src="/photos/navy-dress.jpg" alt="Jimmy Inman in U.S. Navy dress uniform" className="aspect-square w-full object-cover object-top" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
