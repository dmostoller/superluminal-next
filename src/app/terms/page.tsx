import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Superluminal",
  description: "Terms of Service for Superluminal website",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="prose prose-invert mx-auto max-w-3xl">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mt-2">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you agree to these terms of service and
            all applicable laws.
          </p>
        </section>

        <section className="mt-2">
          <h2>2. Music & Content Usage</h2>
          <p>
            All music, artwork, and media content is protected by copyright law.
            You may:
          </p>
          <ul>
            <li>Stream music through official platforms</li>
            <li>Purchase music through authorized retailers</li>
            <li>Share links to official content</li>
          </ul>
          <p>You may not:</p>
          <ul>
            <li>Redistribute or resell any content</li>
            <li>Use music in commercial projects without licensing</li>
            <li>Create derivative works without permission</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>3. Merchandise & Purchases</h2>
          <p>For physical and digital merchandise:</p>
          <ul>
            <li>All sales are final unless damaged/defective</li>
            <li>Shipping times are estimates only</li>
            <li>Digital downloads are for personal use only</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>4. Event Tickets</h2>
          <p>For live events and performances:</p>
          <ul>
            <li>Tickets are non-refundable unless event is cancelled</li>
            <li>Entry subject to venue terms and conditions</li>
            <li>Schedule changes may occur without notice</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>5. User Conduct</h2>
          <p>Users must not:</p>
          <ul>
            <li>Post inappropriate or offensive content</li>
            <li>Attempt to circumvent website security</li>
            <li>Impersonate artist or staff</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>6. Limitation of Liability</h2>
          <p>We are not liable for:</p>
          <ul>
            <li>Service interruptions or website downtime</li>
            <li>Third-party content or links</li>
            <li>User-generated content</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>7. Social Media</h2>
          <p>When interacting with our social media:</p>
          <ul>
            <li>Follow platform-specific terms of service</li>
            <li>Respect community guidelines</li>
            <li>User comments may be used for promotional purposes</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>8. Jurisdiction</h2>
          <p>
            These terms are governed by US law. Any disputes will be subject to
            the exclusive jurisdiction of US courts.
          </p>
        </section>

        <section className="mt-2">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting.
          </p>
        </section>

        <section className="mt-2">
          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact:{" "}
            <a
              href="mailto:legal@superluminal.uk"
              className="text-primary hover:underline"
            >
              superluminalpsy@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
