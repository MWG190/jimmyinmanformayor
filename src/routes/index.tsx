import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { StatStrip } from "@/components/stat-strip";
import { SiteShell } from "@/components/site-shell";
import { highlights, photos, pillars } from "@/lib/campaign";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-16">
          <figure className="lg:col-span-5">
            <img
              src="/photos/headshot.jpg"
              alt="Portrait of Jimmy Inman"
              className="aspect-4/5 w-full object-cover object-top"
            />
          </figure>
          <div className="lg:col-span-7 lg:pl-4">
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
              Covington, Louisiana
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none text-navy sm:text-6xl">
              Jimmy Inman
              <span className="mt-2 block text-3xl text-gold-deep italic sm:text-4xl">for Mayor</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Covington, like our stately oaks, has not only survived. It has flourished. Folks have
              told Jimmy they want a mayor who will continue to lead this community into the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/support"
                className="inline-flex h-12 items-center bg-navy px-5 font-semibold text-paper hover:bg-gold hover:text-navy"
              >
                I’M INMAN
              </Link>
              <Link
                to="/about"
                className="inline-flex h-12 items-center border border-navy px-5 font-semibold text-navy hover:bg-navy hover:text-paper"
              >
                Meet Jimmy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatStrip divided />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <blockquote className="max-w-3xl border-l-4 border-gold pl-6">
            <p className="font-display text-3xl leading-snug text-navy sm:text-4xl">
              I am not running against anyone. I am running for Covington, and for the office of Mayor.
            </p>
            <footer className="mt-4 text-xs font-semibold tracking-widest text-gold-deep uppercase">
              Jimmy Inman
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">Approach</p>
          <h2 className="mt-2 font-display text-4xl text-navy">Community. Continuity. Commitment.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="border-t border-gold pt-4">
                <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{item.kicker}</p>
                <h3 className="mt-2 font-display text-3xl text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WorkUnderway />

      <section>
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="bg-paper">
              <img src={photo.src} alt={photo.alt} className="aspect-4/3 w-full object-cover" />
              <figcaption className="px-4 py-3 text-xs font-semibold tracking-widest text-navy uppercase">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl">Every kitchen table counts.</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-cream">
              If Jimmy has been your teacher, your coach, or your councilman, tell a neighbor. That is
              how this campaign grows.
            </p>
          </div>
          <Link
            to="/support"
            className="inline-flex h-12 items-center bg-gold px-5 font-semibold text-navy hover:bg-paper"
          >
            I’M INMAN
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function rise(shown: boolean) {
  return `transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
    shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;
}

function WorkUnderway() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-4 ${rise(shown)}`}>
          <div>
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">On the council</p>
            <h2 className="mt-2 font-display text-4xl text-navy">Work already underway</h2>
          </div>
          <Link to="/priorities" className="text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
            Full priorities
          </Link>
        </div>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className={`grid grid-cols-[auto_1fr] gap-4 ${rise(shown)}`}
              style={{ transitionDelay: shown ? `${140 + index * 110}ms` : "0ms" }}
            >
              <p className="font-display text-gold-deep">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-1 leading-relaxed">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
