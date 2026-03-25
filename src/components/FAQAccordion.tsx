"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  heading: string;
  items: FAQItem[];
}

export default function FAQAccordion({ heading, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-3xl">
        <h2 className="heading-2 text-navy-900 text-center mb-12">{heading}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-navy-900 pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-navy-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
