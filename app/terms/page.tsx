import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for staying at ${site.name}, Kathmandu.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Booking and admission",
    body: "A room is confirmed once the admission fee and refundable deposit are received. Admission requires a valid ID and a guardian's contact details. Online inquiries are not binding until confirmed by our office.",
  },
  {
    title: "2. Fees and payment",
    body: "Monthly fees are payable in advance by the 5th of each month via cash, bank transfer, eSewa or Khalti. Fees include accommodation, three daily meals, WiFi, laundry, housekeeping and all listed amenities. A late fee of Rs. 500 applies after the 10th.",
  },
  {
    title: "3. Deposit and refunds",
    body: "The security deposit equals one month's rent and is refunded in full at checkout, less any damages, provided 30 days' written notice is given. Fees for the current month are not refundable after the 10th.",
  },
  {
    title: "4. House rules",
    body: "All residents agree to follow the published Hostel Rules, including entry timings, visitor policy and quiet hours. Repeated serious violations may result in termination of stay with the deposit refunded per clause 3.",
  },
  {
    title: "5. Liability",
    body: "While we maintain 24/7 security, residents are responsible for their personal valuables. Lockers are provided in every room. The hostel maintains insurance for the building and common facilities.",
  },
  {
    title: "6. Changes to terms",
    body: `We may update these terms with 30 days' notice to residents. Questions? Contact ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: January 2026"
        breadcrumbs={[{ name: "Terms & Conditions", href: "/terms" }]}
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
