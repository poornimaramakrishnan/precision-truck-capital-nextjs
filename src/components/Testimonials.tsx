import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location?: string;
  company?: string;
}

interface TestimonialsProps {
  heading: string;
  items: Testimonial[];
}

export default function Testimonials({ heading, items }: TestimonialsProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-2 text-navy-900 text-center mb-12 md:mb-16">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
            >
              <Quote className="w-8 h-8 text-orange-200 absolute top-6 right-6" />
              <p className="text-navy-700 leading-relaxed text-lg italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-navy-500">
                    {t.title}
                    {t.location && `, ${t.location}`}
                    {t.company && ` — ${t.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
