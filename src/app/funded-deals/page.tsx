import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FundedDealsGallery from "@/components/FundedDealsGallery";
import { fundedDealsData } from "@/data/funded-deals";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Funded Deals & Case Studies",
  description:
    "Browse real truck financing deals funded by Precision Truck Capital. Semi trucks, trailers, engine overhauls, fleet expansions, and more — see how we help truckers succeed.",
};

export default function FundedDealsPage() {
  const { hero, stats, sectionHeading, finalCta } = fundedDealsData;

  return (
    <>
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCta={hero.primaryCta}
        bgImage={heroImages.fundedDeals}
      />

      {/* Stats Bar */}
      <section className="bg-navy-950 border-t border-white/5 border-b border-white/5">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-3xl md:text-4xl font-extrabold text-orange-400">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400 mt-1 block font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Heading */}
      <section className="section-padding !pb-0 bg-white">
        <div className="container-custom">
          <SectionHeading
            heading={sectionHeading.heading}
            subheading={sectionHeading.subheading}
          />
        </div>
      </section>

      {/* Client-side Gallery with Filter + Modal */}
      <FundedDealsGallery />

      {/* How We Structure It */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            heading="How We Structure Every Deal"
            subheading="Every funded deal follows a proven process designed for speed, transparency, and the best possible terms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Understand Your Business",
                desc: "We don't just look at a credit score. We evaluate your CDL experience, contracts, revenue history, and business plan.",
              },
              {
                num: "02",
                title: "Structure the Right Deal",
                desc: "Custom terms, seasonal payments, step-up structures — we tailor the financing to match how your business actually works.",
              },
              {
                num: "03",
                title: "Fast Underwriting",
                desc: "Our in-house team reviews and approves deals in hours, not weeks. Diesel tech inspections included for used equipment.",
              },
              {
                num: "04",
                title: "Fund & Deliver",
                desc: "DocuSign closings, same-day funding on many deals, and full support from title work to insurance coordination.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
              >
                <span className="block text-4xl font-extrabold text-orange-400/20 group-hover:text-orange-400/40 transition-colors mb-4">
                  {step.num}
                </span>
                <h3 className="heading-3 text-navy-900 !text-lg mb-3">{step.title}</h3>
                <p className="text-navy-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        variant="orange"
      />
    </>
  );
}
