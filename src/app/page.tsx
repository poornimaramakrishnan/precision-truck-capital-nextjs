import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { homeData } from "@/data/home";
import { heroImages } from "@/data/images";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Precision Truck Capital | Commercial Truck Financing - Direct Lender",
  description:
    "Direct lender for commercial truck financing. Approvals in hours, 0% down options, bad credit welcome. New and used trucks, trailers, engine overhauls - nationwide.",
};

export default function HomePage() {
  const { hero, trustBar, whyChooseUs, whatWeFinance, dealerTeaser, testimonials, finalCta } =
    homeData;

  return (
    <>
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        size="large"
        bgImage={heroImages.home}
      />

      <TrustBar items={trustBar} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading heading={whyChooseUs.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.items.map((item) => (
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

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            heading={whatWeFinance.heading}
            subheading={whatWeFinance.subheading}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeFinance.items.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
                For Dealers &amp; Service Centers
              </span>
              <h2 className="heading-2 text-white max-w-2xl mx-auto">
                {dealerTeaser.heading}
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                {dealerTeaser.description}
              </p>
              <Link
                href={dealerTeaser.cta.href}
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                {dealerTeaser.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials heading={testimonials.heading} items={testimonials.items} />

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