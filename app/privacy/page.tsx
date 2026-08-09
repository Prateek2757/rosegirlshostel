import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: "When you submit an inquiry or book a room, we collect your name, phone number, email address, college or workplace, and preferred move-in details. For residents, we additionally keep a copy of your citizenship/ID and a guardian's contact number as required for security.",
  },
  {
    title: "How we use your information",
    body: "We use your details only to respond to inquiries, manage your stay, contact your guardian in emergencies, and send occasional service updates. We never sell or rent your personal information to third parties.",
  },
  {
    title: "CCTV and security data",
    body: "CCTV operates in entrances and common areas only — never inside rooms or washrooms. Footage is stored securely for 30 days and reviewed only for safety incidents.",
  },
  {
    title: "Data retention",
    body: "Inquiry data is deleted after 12 months if you do not become a resident. Resident records are kept for the duration of your stay plus one year, as required for our records.",
  },
  {
    title: "Your rights",
    body: `You may request a copy, correction or deletion of your personal data at any time by emailing ${site.email}. We respond to all requests within 7 working days.`,
  },
  {
    title: "Contact",
    body: `For any privacy questions, contact us at ${site.email} or ${site.phone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026"
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy" }]}
      />
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-3xl space-y-10 px-4 md:px-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
