import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { contactData } from "@/data/contact";
import { heroImages } from "@/data/images";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to a truck finance expert today. No call centers — real people who understand trucking. Call 1-800-878-2548 or submit an application online.",
};

export default function ContactPage() {
  const { hero, quickContact, form, mapNote, finalCta } = contactData;

  return (
    <>
      {/* Hero */}
      <Hero headline={hero.headline} subheadline={hero.subheadline} bgImage={heroImages.contact} />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm
                heading={form.heading}
                subheading={form.subheading}
                fields={form.fields}
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="heading-3 text-navy-900 mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500 mb-1">Phone</p>
                      <a
                        href={`tel:${quickContact.phoneRaw}`}
                        className="text-lg font-semibold text-navy-900 hover:text-orange-600 transition-colors"
                      >
                        {quickContact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500 mb-1">Email</p>
                      <a
                        href={`mailto:${quickContact.email}`}
                        className="text-navy-900 font-medium hover:text-orange-600 transition-colors"
                      >
                        {quickContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500 mb-1">Business Hours</p>
                      <p className="text-navy-900 font-medium">{quickContact.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500 mb-1">Office</p>
                      <p className="text-navy-900 font-medium">
                        {quickContact.address.street}
                        <br />
                        {quickContact.address.city}, {quickContact.address.state}{" "}
                        {quickContact.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Note */}
              <div className="bg-navy-950 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent" />
                </div>
                <div className="relative z-10">
                  <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-sm leading-relaxed">{mapNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        primaryCta={finalCta.cta}
        variant="dark"
      />
    </>
  );
}
