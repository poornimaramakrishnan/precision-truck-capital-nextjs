"use client";

import type { DealCategory } from "@/data/funded-deals";

interface DealFilterProps {
  categories: DealCategory[];
  activeCategory: DealCategory | "All";
  onFilter: (category: DealCategory | "All") => void;
  counts: Record<string, number>;
}

export default function DealFilter({
  categories,
  activeCategory,
  onFilter,
  counts,
}: DealFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {/* All button */}
      <button
        onClick={() => onFilter("All")}
        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
          activeCategory === "All"
            ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/25"
            : "bg-white text-navy-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
        }`}
      >
        All
        <span
          className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
            activeCategory === "All"
              ? "bg-white/25"
              : "bg-gray-100"
          }`}
        >
          {Object.values(counts).reduce((sum, c) => sum + c, 0)}
        </span>
      </button>

      {categories.map((cat) =>
        counts[cat] ? (
          <button
            key={cat}
            onClick={() => onFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
              activeCategory === cat
                ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/25"
                : "bg-white text-navy-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
            }`}
          >
            {cat}
            <span
              className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                activeCategory === cat
                  ? "bg-white/25"
                  : "bg-gray-100"
              }`}
            >
              {counts[cat]}
            </span>
          </button>
        ) : null
      )}
    </div>
  );
}
