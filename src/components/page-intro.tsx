import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-navy sm:text-5xl">{title}</h1>
        {children ? <div className="mt-5 max-w-2xl text-lg leading-relaxed">{children}</div> : null}
      </div>
    </header>
  );
}
