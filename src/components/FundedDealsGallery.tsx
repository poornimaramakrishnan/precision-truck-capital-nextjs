"use client";

import { useState, useMemo } from "react";
import FundedDealCard from "@/components/FundedDealCard";
import DealDetailModal from "@/components/DealDetailModal";
import DealFilter from "@/components/DealFilter";
import {
  fundedDealsData,
  dealCategories,
  type FundedDeal,
  type DealCategory,
} from "@/data/funded-deals";

export default function FundedDealsGallery() {
  const [activeCategory, setActiveCategory] = useState<DealCategory | "All">("All");
  const [selectedDeal, setSelectedDeal] = useState<FundedDeal | null>(null);

  const deals = fundedDealsData.deals;

  // Calculate counts per category
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const deal of deals) {
      map[deal.category] = (map[deal.category] || 0) + 1;
    }
    return map;
  }, [deals]);

  // Filtered deals
  const filteredDeals = useMemo(() => {
    if (activeCategory === "All") return deals;
    return deals.filter((d) => d.category === activeCategory);
  }, [deals, activeCategory]);

  return (
    <>
      {/* Filter Bar */}
      <section className="section-padding !pb-0 bg-white">
        <div className="container-custom">
          <DealFilter
            categories={dealCategories}
            activeCategory={activeCategory}
            onFilter={setActiveCategory}
            counts={counts}
          />
        </div>
      </section>

      {/* Deal Cards Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredDeals.length === 0 ? (
            <p className="text-center text-navy-500 py-12">
              No deals in this category yet. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeals.map((deal) => (
                <FundedDealCard
                  key={deal.slug}
                  deal={deal}
                  onSelect={setSelectedDeal}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <DealDetailModal deal={selectedDeal} onClose={() => setSelectedDeal(null)} />
    </>
  );
}
