"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface ContactFormProps {
  heading: string;
  subheading: string;
  fields: FormField[];
}

export default function ContactForm({ heading, subheading, fields }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to Formspree/Tally/Jotform
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="heading-3 text-navy-900 mb-3">Application Received!</h3>
        <p className="text-navy-600 max-w-md mx-auto">
          Thank you for your interest. A loan officer will contact you within one business day to
          discuss your financing options.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
      <h3 className="heading-3 text-navy-900 mb-2">{heading}</h3>
      <p className="text-navy-500 mb-8">{subheading}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-navy-700 mb-1.5"
            >
              {field.label}
              {field.required && <span className="text-orange-500 ml-1">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy-900 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="">Select...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
        >
          <Send className="w-4 h-4" />
          Submit Application
        </button>

        <p className="text-xs text-navy-400 text-center mt-4">
          By submitting this form, you agree to be contacted by Precision Truck Capital regarding
          financing options. No hard credit pull on initial application.
        </p>
      </form>
    </div>
  );
}
