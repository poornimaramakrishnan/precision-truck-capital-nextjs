export const contactData = {
  hero: {
    headline: "Talk to a Truck Finance Expert Today",
    subheadline:
      "No call centers. No automated menus. Real people who understand trucking and are ready to help.",
  },

  quickContact: {
    phone: "1-800-878-2548",
    phoneRaw: "18008782548",
    email: "funding@precisiontruckcapital.com",
    hours: "Monday – Friday, 8:00 AM – 6:00 PM EST",
    address: {
      street: "1200 Route 73 South, Suite 310",
      city: "Mt. Laurel",
      state: "NJ",
      zip: "08054",
    },
  },

  form: {
    heading: "Send Us a Message",
    subheading:
      "Fill out the form below and a loan officer will contact you within one business day.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      {
        name: "equipmentType",
        label: "Equipment Type",
        type: "select",
        required: true,
        options: [
          "Semi Truck / Tractor",
          "Box Truck",
          "Dump Truck",
          "Tow Truck / Wrecker",
          "Trailer",
          "Engine Overhaul / Repair",
          "Other Equipment",
        ],
      },
      {
        name: "loanAmount",
        label: "Estimated Loan Amount",
        type: "select",
        required: false,
        options: [
          "Under $25,000",
          "$25,000 – $50,000",
          "$50,000 – $100,000",
          "$100,000 – $250,000",
          "$250,000+",
        ],
      },
      {
        name: "creditTier",
        label: "Credit Self-Assessment",
        type: "select",
        required: false,
        options: [
          "Excellent (720+)",
          "Good (680–719)",
          "Fair (620–679)",
          "Challenged (Below 620)",
          "Startup / No Business Credit",
        ],
      },
      { name: "message", label: "Tell Us About Your Needs", type: "textarea", required: false },
    ],
  },

  mapNote:
    "Proudly serving owner-operators, fleets, and dealers across all 48 contiguous states from our Mt. Laurel, NJ headquarters.",

  finalCta: {
    heading: "Prefer to Talk Now?",
    subheading: "Call us directly and speak to a truck finance expert in minutes.",
    cta: { label: "Call 1-800-878-2548", href: "tel:18008782548" },
  },
};
