import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/campaign";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-navy text-paper">
      <div className="flex w-full items-center justify-between gap-4 py-2 pr-5 pl-4 sm:pr-8 sm:pl-6">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/photos/logo-header.jpg" alt="Jimmy Inman for Mayor" className="h-20 w-auto border-2 border-white sm:h-28" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-semibold tracking-wide ${active ? "text-gold" : "text-cream hover:text-gold"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/support"
            className="inline-flex h-11 items-center bg-gold px-4 text-sm font-semibold tracking-wide text-navy hover:bg-paper"
          >
            I’M INMAN
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-paper lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-gold/30 bg-navy-deep px-5 py-3 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block py-3 text-base font-semibold text-paper"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/support"
            className="mt-2 inline-flex h-12 items-center bg-gold px-4 text-sm font-semibold text-navy"
            onClick={() => setOpen(false)}
          >
            I’M INMAN
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
