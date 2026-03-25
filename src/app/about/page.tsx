import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import CTASection from "@/components/CTASection";
import { aboutData } from "@/data/about";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 45 years of commercial truck financing experience. Direct lender, certified diesel technicians on staff, every credit profile welcome. Learn our story.",
};

export default function AboutPage() {
  const { hero, story, whyDifferent, stats, values, team, finalCta } = aboutData;

  return (
    <>
      {/* Hero */}
      <Hero headline={hero.headline} subheadline={hero.subheadline} bgImage={heroImages.about} />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-2 text-navy-900 mb-8">{story.heading}</h2>
          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <p key={i} className="text-navy-600 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading heading={whyDifferent.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyDifferent.items.map((item) => (
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

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading heading={values.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
              >
                <h3 className="heading-3 text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading heading={team.heading} subheading={team.description} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
              >
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-navy-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-900 text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mt-1">{member.title}</p>
                <p className="text-navy-600 text-sm mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        primaryCta={finalCta.cta}
      />
    </>
  );
}
