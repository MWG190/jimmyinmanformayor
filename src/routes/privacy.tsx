import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <SiteShell>
      <PageIntro kicker="Privacy" title="What this site keeps">
        <div className="space-y-4">
          <p>
            The volunteer form stores your name, contact details, and note only in this browser,
            under a local key on your device. It is not sold.
          </p>
          <p>
            Clearing your browser data removes it. The campaign phone number is listed in the footer.
          </p>
          <p>This site does not run advertising trackers.</p>
        </div>
      </PageIntro>
    </SiteShell>
  );
}
