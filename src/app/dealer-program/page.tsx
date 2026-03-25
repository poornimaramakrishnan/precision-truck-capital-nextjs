import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import StepsTimeline from "@/components/StepsTimeline";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { dealerData } from "@/data/dealer";
import { heroImages } from "@/data/images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dealer & Service Center Program",
  description:
    "Join our dealer financing program. Offer instant truck financing to your customers. Increase service revenue 3-4x. No cost to join. Dedicated support.",
};

export default function DealerProgramPage() {
  const { hero, benefits, howItWorks, features, testimonials, finalCta } = dealerData;

  return (
    <>
      {/* Hero */}
      <Hero headline={hero.headline} subheadline={hero.subheadline} bgImage={heroImages.dealer} />

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading heading={benefits.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.items.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="centered"
              />
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

      {/* Features List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading heading={features.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.items.map((item) => (
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

      {/* Testimonials */}
      <Testimonials heading="What Our Dealer Partners Say" items={testimonials} />

      {/* Final CTA */}
      <CTASection
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        primaryCta={finalCta.cta}
        variant="orange"
      />
    </>
  );
}
