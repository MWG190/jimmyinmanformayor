import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/campaign";

function useOnScreen() {
  const ref = useRef<HTMLDListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <span className="tabular-nums">{value}</span>;
}

function NavyMark({ active }: { active: boolean }) {
  return (
    <span className="inline-flex" aria-label="Navy">
      {"NAVY".split("").map((letter, index) => (
        <span
          key={letter}
          className={`inline-block transition-all duration-500 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: active ? `${index * 110}ms` : "0ms" }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export function StatStrip({ divided = false }: { divided?: boolean }) {
  const { ref, active } = useOnScreen();

  return (
    <section className="border-b border-line bg-cream" aria-label="Years of service">
      <dl
        ref={ref}
        className={
          divided
            ? "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-4"
            : "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4"
        }
      >
        {stats.map((item) => (
          <div key={item.label} className={divided ? "bg-cream px-5 py-6 sm:px-8" : "px-5 py-6 sm:px-8"}>
            <dt className="font-display text-3xl text-navy sm:text-4xl">
              {item.kind === "count" ? <CountUp target={item.value} active={active} /> : <NavyMark active={active} />}
            </dt>
            <dd
              className={`mt-1 text-sm font-semibold text-muted transition-opacity duration-700 motion-reduce:opacity-100 ${
                item.kind === "navy" ? (active ? "opacity-100" : "opacity-0") : ""
              }`}
              style={item.kind === "navy" && active ? { transitionDelay: "420ms" } : undefined}
            >
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
