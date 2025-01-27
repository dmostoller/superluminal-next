import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Superluminal",
  description: "Privacy Policy for Superluminal website",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="prose prose-invert mx-auto max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mt-2">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information automatically when you visit our website
            through cookies and similar technologies, including:
          </p>
          <ul>
            <li>Website usage data through Google Analytics</li>
            <li>Device information and IP address</li>
            <li>Browser type and settings</li>
            <li>Referring websites</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>2. Third-Party Services</h2>
          <p>Our website integrates with various third-party services:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>
              Spotify, Bandcamp, and other music streaming platforms for content
              delivery
            </li>
            <li>Social media platforms for content sharing</li>
          </ul>
          <p>
            Each of these services has their own privacy policy and handling of
            user data.
          </p>
        </section>

        <section className="mt-2">
          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Analyze website traffic and improve user experience</li>
            <li>Understand our audience demographics</li>
            <li>Optimize our content and marketing efforts</li>
            <li>Respond to your inquiries or requests</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>4. Cookie Policy</h2>
          <p>
            We use cookies to enhance your browsing experience. These include:
          </p>
          <ul>
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to understand user behavior</li>
            <li>Third-party cookies from integrated services</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics tracking</li>
            <li>Disable cookies through your browser settings</li>
          </ul>
        </section>

        <section className="mt-2">
          <h2>6. Contact Information</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:{" "}
            <a
              href="mailto:privacy@superluminal.uk"
              className="text-primary hover:underline"
            >
              superluminalpsy@gmail.com
            </a>
          </p>
        </section>

        <section className="mt-2">
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </main>
  );
}
