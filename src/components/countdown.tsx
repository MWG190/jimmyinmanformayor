import { useEffect, useState } from "react";
import { PRIMARY } from "@/lib/campaign";

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [
    { label: "Days", value: String(days) },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Min", value: String(minutes).padStart(2, "0") },
    { label: "Sec", value: String(seconds).padStart(2, "0") },
  ];
}

const PLACEHOLDER = [
  { label: "Days", value: "—" },
  { label: "Hours", value: "—" },
  { label: "Min", value: "—" },
  { label: "Sec", value: "—" },
];

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const items = now == null ? PLACEHOLDER : parts(PRIMARY.getTime() - now);

  return (
    <section className="border-b border-gold/40 bg-navy text-paper" aria-label="Countdown to the municipal primary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Municipal primary</p>
          <p className="mt-1 font-display text-xl text-paper sm:text-2xl">April 17, 2027</p>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {items.map((item) => (
            <div key={item.label} className="min-w-16 text-center sm:min-w-20">
              <div className="font-display text-3xl text-gold tabular-nums sm:text-4xl">{item.value}</div>
              <div className="mt-1 text-xs font-semibold tracking-widest text-cream/80 uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
