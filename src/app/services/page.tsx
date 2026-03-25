import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import StepsTimeline from "@/components/StepsTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/data/services";
import { heroImages } from "@/data/images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing Services",
  description:
    "Commercial truck financing, trailer loans, engine overhaul financing, fleet expansion programs, and startup trucker loans. One application, multiple options.",
};

export default function ServicesPage() {
  const { hero, programs, keyBenefits, howItWorks, faq, finalCta } = servicesData;

  return (
    <>
      {/* Hero */}
      <Hero headline={hero.headline} subheadline={hero.subheadline} bgImage={heroImages.services} />

      {/* Financing Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            heading="Our Financing Programs"
            subheading="Specialized solutions for every truck and equipment financing need"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <IconCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.description}
                highlights={program.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading heading={keyBenefits.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyBenefits.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-navy-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <StepsTimeline
        heading={howItWorks.heading}
        subheading={howItWorks.subheading}
        steps={howItWorks.steps}
      />

      {/* FAQ */}
      <FAQAccordion heading={faq.heading} items={faq.items} />

      {/* Final CTA */}
      <CTASection
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        primaryCta={finalCta.cta}
      />
    </>
  );
}
