import { Link } from "@tanstack/react-router";
import { election } from "@/lib/campaign";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 sm:px-8 md:grid-cols-2">
        <div className="text-sm leading-relaxed">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">The ballot</p>
          <p className="mt-3">Primary: {election.primary}</p>
          <p>Early voting: {election.earlyVoting}</p>
          <p>General, if needed: {election.general}</p>
          <p className="mt-4 text-cream/70">
            Dates follow the Louisiana Secretary of State 2027 elections calendar. The new term
            begins July 1.
          </p>
        </div>
        <div className="text-sm leading-relaxed md:text-right">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Site</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/about" className="font-semibold text-cream hover:text-gold">
                About Jimmy
              </Link>
            </li>
            <li>
              <Link to="/priorities" className="font-semibold text-cream hover:text-gold">
                Priorities
              </Link>
            </li>
            <li>
              <Link to="/news" className="font-semibold text-cream hover:text-gold">
                News
              </Link>
            </li>
            <li>
              <Link to="/support" className="font-semibold text-cream hover:text-gold">
                Support the campaign
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="font-semibold text-gold hover:text-paper">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center px-5 pt-12 pb-8 text-center sm:px-8">
        <img src="/photos/logo.jpg" alt="Jimmy Inman for Mayor" className="w-52 border-2 border-white" />
        <address className="mt-6 text-sm leading-relaxed text-cream not-italic">
          617 Lakewood Northshore Drive
          <br />
          Covington, LA 70433
          <br />
          <a href="tel:+19858019750" className="font-semibold text-cream hover:text-gold">
            (985) 801-9750
          </a>
        </address>
        <p className="mt-8 inline-block border border-cream px-4 py-2 text-sm text-cream">
          Paid for by Jimmy Inman for Mayor
        </p>
      </div>
    </footer>
  );
}
