// ──────────────────────────────────────────────────
// Funded Deals / Case Studies — structured like ACF
// Custom Post Type "projects" with repeater fields
// ──────────────────────────────────────────────────

export interface KeyDetail {
  label: string;
  value: string;
}

export interface FundedDeal {
  slug: string;
  projectName: string;
  category: DealCategory;
  description: string;            // Rich text description
  featuredImage: string;           // Hero / card thumbnail
  gallery: string[];               // ACF gallery field — multiple images
  keyDetails: KeyDetail[];         // ACF repeater field — label/value pairs
  amountFunded: string;            // e.g. "$127,500"
  clientName: string;
  clientTitle: string;
  location: string;
  testimonial?: string;            // Optional pull quote
}

export type DealCategory =
  | "Semi Trucks"
  | "Trailers"
  | "Engine Overhauls"
  | "Startup Operators"
  | "Fleet Expansion"
  | "Dump & Vocational"
  | "Dealer Program"
  | "Tow & Recovery";

export const dealCategories: DealCategory[] = [
  "Semi Trucks",
  "Trailers",
  "Engine Overhauls",
  "Startup Operators",
  "Fleet Expansion",
  "Dump & Vocational",
  "Dealer Program",
  "Tow & Recovery",
];

export const fundedDealsData = {
  hero: {
    headline: "Real Deals. Real Results.",
    subheadline:
      "Browse our portfolio of funded transactions — from single owner-operator purchases to multi-truck fleet expansions. Every deal tells a story of a business that kept moving because of Precision Truck Capital.",
    primaryCta: { label: "Get Your Deal Funded", href: "/contact" },
  },

  stats: [
    { value: "$500M+", label: "Total Funded to Date" },
    { value: "10,000+", label: "Trucks & Equipment Financed" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "4.2hrs", label: "Avg. Approval Time" },
  ],

  sectionHeading: {
    heading: "Our Funded Deals Portfolio",
    subheading:
      "Filter by category to see how we've helped owner-operators, fleets, dealers, and service centers across the country.",
  },

  deals: [
    {
      slug: "peterbilt-389-owner-operator-nj",
      projectName: "2024 Peterbilt 389 — Owner-Operator Purchase",
      category: "Semi Trucks" as DealCategory,
      description:
        "Mike R. had been leasing for 7 years and was ready to own. Traditional banks turned him down due to a past bankruptcy (discharged 3 years prior). We evaluated his 12 years of CDL-A experience, clean driving record, and steady contract with a national carrier. Approved in 6 hours with a competitive rate and structured the payments around his freight settlement schedule. Mike took delivery of a 2024 Peterbilt 389 with a Cummins X15 and is now building equity instead of paying rent on someone else's truck.",
      featuredImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
        "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1200&q=80",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "2024 Peterbilt 389 Sleeper" },
        { label: "Engine", value: "Cummins X15, 565 HP" },
        { label: "Amount Funded", value: "$187,500" },
        { label: "Term", value: "60 months" },
        { label: "Down Payment", value: "10% ($18,750)" },
        { label: "Credit Profile", value: "Challenged — prior bankruptcy" },
        { label: "Time to Approval", value: "6 hours" },
        { label: "State", value: "New Jersey" },
      ],
      amountFunded: "$187,500",
      clientName: "Mike R.",
      clientTitle: "Owner-Operator",
      location: "Newark, NJ",
      testimonial:
        "Banks said no because of my bankruptcy. Precision said 'let's look at the full picture.' Six hours later I was approved. Now I own my rig and my payments are less than my old lease.",
    },
    {
      slug: "startup-operator-freightliner-cascadia",
      projectName: "Startup Operator — First Truck Purchase",
      category: "Startup Operators" as DealCategory,
      description:
        "Sandra K. had 8 years of experience driving for a major carrier but zero business credit history as a startup owner-operator. Every bank required 2 years of business tax returns she didn't have. We designed our Startup Trucker Program specifically for drivers like Sandra — evaluating CDL experience, safety record, and her signed freight contract instead of traditional business financials. She was approved for a 2022 Freightliner Cascadia with just $5,000 down and is now running her own authority with two dedicated lanes.",
      featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200&q=80",
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "2022 Freightliner Cascadia" },
        { label: "Engine", value: "Detroit DD15, 505 HP" },
        { label: "Amount Funded", value: "$142,000" },
        { label: "Term", value: "48 months" },
        { label: "Down Payment", value: "$5,000 (Startup Program)" },
        { label: "Credit Profile", value: "Startup — no business credit" },
        { label: "Time to Approval", value: "48 hours" },
        { label: "Program", value: "Startup Trucker Loan" },
      ],
      amountFunded: "$142,000",
      clientName: "Sandra K.",
      clientTitle: "New Owner-Operator",
      location: "Charlotte, NC",
      testimonial:
        "Eight years behind the wheel for someone else — Precision saw that experience as an asset, not a risk. I got my own truck and my own authority. Life-changing.",
    },
    {
      slug: "cummins-isx-engine-overhaul",
      projectName: "Cummins ISX15 Complete Engine Overhaul",
      category: "Engine Overhauls" as DealCategory,
      description:
        "Carlos M. runs a 12-truck fleet out of Atlanta. When his lead truck's Cummins ISX15 threw a rod at 780,000 miles, he was facing a $28,000 repair bill and a truck sitting idle losing $800/day in revenue. His bank wouldn't touch an engine repair loan. We funded the complete overhaul at a Cummins-authorized service center within 72 hours. The truck was back on the road in 10 days, and Carlos structured the repayment over 24 months so the truck's revenue easily covered the payments.",
      featuredImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
        "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1200&q=80",
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "Cummins ISX15 — Complete Overhaul" },
        { label: "Service Center", value: "Cummins-Authorized Dealer, Atlanta" },
        { label: "Amount Funded", value: "$28,400" },
        { label: "Term", value: "24 months" },
        { label: "Down Payment", value: "$0 (Engine Overhaul Program)" },
        { label: "Daily Revenue Lost", value: "$800/day while idle" },
        { label: "Time to Funding", value: "72 hours" },
        { label: "Back on Road", value: "10 days total downtime" },
      ],
      amountFunded: "$28,400",
      clientName: "Carlos M.",
      clientTitle: "Fleet Owner (12 trucks)",
      location: "Atlanta, GA",
      testimonial:
        "A $28K surprise repair could've crippled my cash flow. Precision funded it in 3 days with zero down. The truck paid for its own repair within 2 months.",
    },
    {
      slug: "reefer-trailer-fleet-expansion",
      projectName: "Three Wabash Reefer Trailers — Fleet Expansion",
      category: "Trailers" as DealCategory,
      description:
        "Gonzalez Freight LLC was awarded a temperature-controlled contract with a national grocery chain but needed three additional reefer trailers within 30 days to meet the start date. The owner had strong business credit but needed creative structuring to keep his debt-to-income ratio within underwriting guidelines. We financed all three 2023 Wabash 53' reefers under a single master agreement with a seasonal payment structure that matched his revenue cycles — lower payments in Q1 and Q4, standard payments during peak produce season.",
      featuredImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80",
        "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "3× 2023 Wabash 53' Reefer Trailers" },
        { label: "Refrigeration", value: "Carrier X4 7500 Units" },
        { label: "Total Funded", value: "$246,000 ($82K each)" },
        { label: "Term", value: "60 months" },
        { label: "Structure", value: "Seasonal payment plan" },
        { label: "Credit Profile", value: "Strong business credit" },
        { label: "Time to Approval", value: "4 hours" },
        { label: "Delivery", value: "All 3 delivered in 21 days" },
      ],
      amountFunded: "$246,000",
      clientName: "Gonzalez Freight LLC",
      clientTitle: "Regional Carrier",
      location: "Laredo, TX",
      testimonial:
        "We had 30 days to add 3 reefers or lose the contract. Precision approved us in 4 hours and structured payments around our seasonal revenue. We didn't miss the deadline.",
    },
    {
      slug: "dealer-program-volvo-service-center",
      projectName: "Dealer Partner — Volvo Service Center Revenue Growth",
      category: "Dealer Program" as DealCategory,
      description:
        "Northeast Volvo Trucks, a full-service dealership in Allentown, PA, was losing engine overhaul business because 60% of their customers couldn't pay for major repairs upfront. After joining our Dealer & Service Center Financing Program, their service advisors could offer instant financing at the point of sale. Within 6 months, their monthly engine overhaul volume went from 8 to 32 — a 300% increase. Their average repair order value also increased because customers were willing to approve additional recommended work when financing was available.",
      featuredImage: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1200&q=80",
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Partner Type", value: "Full-Service Volvo Dealership" },
        { label: "Location", value: "Allentown, PA" },
        { label: "Monthly Overhauls (Before)", value: "8 per month" },
        { label: "Monthly Overhauls (After)", value: "32 per month (+300%)" },
        { label: "Total Funded (Year 1)", value: "$1.2M in customer financing" },
        { label: "Avg. Repair Order", value: "Increased 45%" },
        { label: "Setup Cost to Dealer", value: "$0" },
        { label: "Program", value: "Dealer & Service Center Program" },
      ],
      amountFunded: "$1.2M",
      clientName: "Brian H.",
      clientTitle: "Service Manager, Northeast Volvo Trucks",
      location: "Allentown, PA",
      testimonial:
        "Our service department revenue tripled. Customers who used to decline major repairs now say yes because financing is instant. It's been a game-changer for our bottom line.",
    },
    {
      slug: "kenworth-t880-dump-truck",
      projectName: "2023 Kenworth T880 Dump Truck — Construction Business",
      category: "Dump & Vocational" as DealCategory,
      description:
        "Rivera Excavation needed a heavy-duty dump truck to fulfill a 2-year municipal road contract. The owner had good personal credit but limited business history (18 months). We structured the deal using a combination of the equipment as collateral and the signed municipal contract as proof of future revenue. The 2023 Kenworth T880 with a 16' Ox body was funded in 48 hours, and the truck was working on the job site within a week of application.",
      featuredImage: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80",
        "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=1200&q=80",
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "2023 Kenworth T880 Dump Truck" },
        { label: "Body", value: "16' Ox Body Steel Dump" },
        { label: "Amount Funded", value: "$165,000" },
        { label: "Term", value: "60 months" },
        { label: "Down Payment", value: "15% ($24,750)" },
        { label: "Credit Profile", value: "Good personal / limited business" },
        { label: "Time to Approval", value: "48 hours" },
        { label: "Use Case", value: "Municipal road construction" },
      ],
      amountFunded: "$165,000",
      clientName: "Rivera Excavation LLC",
      clientTitle: "Construction Company",
      location: "Philadelphia, PA",
    },
    {
      slug: "fleet-expansion-5-trucks",
      projectName: "5-Truck Fleet Expansion — Regional Carrier",
      category: "Fleet Expansion" as DealCategory,
      description:
        "Patriot Logistics, a 15-truck regional LTL carrier based in Virginia, was awarded a significant distribution contract that required adding 5 trucks within 60 days. Their existing bank offered terms that would have strained their credit line and limited future borrowing capacity. We structured a fleet expansion package with a single master note, step-up payments that started low during the ramp-up period, and built-in refinancing options at 24 months. All 5 trucks — 2024 Volvo VNL 860s — were titled, insured, and on the road in 45 days.",
      featuredImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "5× 2024 Volvo VNL 860 Sleepers" },
        { label: "Total Funded", value: "$875,000" },
        { label: "Term", value: "72 months with step-up payments" },
        { label: "Structure", value: "Single master note, fleet rate" },
        { label: "Refinance Option", value: "Available at 24 months" },
        { label: "Credit Profile", value: "Strong — established carrier" },
        { label: "Time to Approval", value: "8 hours" },
        { label: "All Trucks Delivered", value: "45 days from application" },
      ],
      amountFunded: "$875,000",
      clientName: "Patriot Logistics Inc.",
      clientTitle: "Regional LTL Carrier (15 → 20 trucks)",
      location: "Richmond, VA",
      testimonial:
        "Our bank would've taken 6 weeks and eaten into our credit line. Precision approved $875K in one business day with better terms. All 5 Volvos were running in 45 days.",
    },
    {
      slug: "jerr-dan-tow-truck-recovery",
      projectName: "Jerr-Dan Heavy-Duty Wrecker — Recovery Business",
      category: "Tow & Recovery" as DealCategory,
      description:
        "Thompson Towing & Recovery had been running medium-duty trucks for 5 years and wanted to break into heavy-duty recovery — a higher-margin segment that required a significant equipment investment. The Jerr-Dan 50-ton integrated wrecker they needed was $320,000 new, and their local bank wouldn't finance specialty recovery equipment. We understood the tow and recovery industry's unique economics (per-job pricing, municipal contracts, motor club agreements) and structured a 72-month deal with payments calibrated to the truck's projected revenue per rotation.",
      featuredImage: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1200&q=80",
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
      ],
      keyDetails: [
        { label: "Equipment", value: "Jerr-Dan 50-Ton Integrated Wrecker" },
        { label: "Chassis", value: "Peterbilt 389 Heavy-Spec" },
        { label: "Amount Funded", value: "$320,000" },
        { label: "Term", value: "72 months" },
        { label: "Down Payment", value: "10% ($32,000)" },
        { label: "Credit Profile", value: "Good — 5yr business history" },
        { label: "Time to Approval", value: "12 hours" },
        { label: "Use Case", value: "Heavy-duty highway recovery" },
      ],
      amountFunded: "$320,000",
      clientName: "Thompson Towing & Recovery",
      clientTitle: "Tow & Recovery Company",
      location: "Columbus, OH",
      testimonial:
        "No bank in town would finance a wrecker. Precision understood our business model and got us into a 50-ton Jerr-Dan. We paid for it in the first year from highway recovery calls alone.",
    },
  ] as FundedDeal[],

  finalCta: {
    heading: "Your Deal Could Be Next",
    subheading:
      "Whether it's your first truck or your fiftieth, we'll find the right financing structure. Apply in 5 minutes.",
    primaryCta: { label: "Start Your Application", href: "/contact" },
    secondaryCta: { label: "Call 1-800-878-2548", href: "tel:18008782548" },
  },
};
