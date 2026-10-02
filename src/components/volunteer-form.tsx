import { useState } from "react";

type Note = {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  help: string;
  message: string;
  at: string;
};

const HELP = ["Walk a neighborhood", "Host a coffee", "Yard sign", "Share with friends", "Just stay in touch"];

const field =
  "h-12 border border-line bg-paper px-3 font-normal text-ink focus:border-gold";

export function VolunteerForm() {
  const [sent, setSent] = useState(false);
  const [help, setHelp] = useState(HELP[0]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const note: Note = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      neighborhood: String(data.get("neighborhood") ?? "").trim(),
      help,
      message: String(data.get("message") ?? "").trim(),
      at: new Date().toISOString(),
    };
    const prior = JSON.parse(localStorage.getItem("inman-volunteer") ?? "[]") as Note[];
    localStorage.setItem("inman-volunteer", JSON.stringify([note, ...prior].slice(0, 40)));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-cream p-6">
        <h3 className="font-display text-3xl text-navy">You’re on the list.</h3>
        <p className="mt-3 leading-relaxed">
          Thank you. Your note is saved in this browser. You can also reach the campaign at (985) 801-9750.
        </p>
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-gold-deep underline underline-offset-4"
          onClick={() => setSent(false)}
        >
          Add another person
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 border border-line bg-cream p-6">
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Name
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold text-navy">
          Email
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-navy">
          Phone
          <input name="phone" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Neighborhood
        <input
          name="neighborhood"
          placeholder="River Forest, Division of St. John, downtown…"
          className={field}
        />
      </label>
      <fieldset>
        <legend className="text-sm font-semibold text-navy">How do you want to help?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {HELP.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setHelp(item)}
              className={`border px-3 py-2 text-sm font-semibold ${
                help === item ? "border-navy bg-navy text-paper" : "border-line bg-paper text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Anything Jimmy should hear
        <textarea name="message" rows={4} className="border border-line bg-paper px-3 py-2 font-normal text-ink" />
      </label>
      <button type="submit" className="h-12 bg-gold text-base font-semibold tracking-wide text-navy hover:bg-navy hover:text-paper">
        I’M INMAN
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Saved only in this browser.
      </p>
    </form>
  );
}
