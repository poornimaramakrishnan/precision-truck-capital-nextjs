"use client";

import Image from "next/image";
import { DollarSign, MapPin, Clock, ChevronRight } from "lucide-react";
import type { FundedDeal } from "@/data/funded-deals";

interface FundedDealCardProps {
  deal: FundedDeal;
  onSelect: (deal: FundedDeal) => void;
}

export default function FundedDealCard({ deal, onSelect }: FundedDealCardProps) {
  return (
    <button
      onClick={() => onSelect(deal)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 text-left w-full"
    >
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={deal.featuredImage}
          alt={deal.projectName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-navy-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
          {deal.category}
        </span>
        {/* Amount Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1">
          <DollarSign className="w-3 h-3" />
          {deal.amountFunded.replace("$", "")}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-navy-900 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            View Case Study <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-navy-900 text-lg leading-snug mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
          {deal.projectName}
        </h3>

        {/* Quick Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-navy-600">
            <MapPin className="w-3.5 h-3.5 text-navy-400 shrink-0" />
            {deal.clientName} · {deal.location}
          </div>
          {deal.keyDetails.find((d) => d.label === "Time to Approval") && (
            <div className="flex items-center gap-2 text-sm text-navy-600">
              <Clock className="w-3.5 h-3.5 text-navy-400 shrink-0" />
              Approved in {deal.keyDetails.find((d) => d.label === "Time to Approval")?.value}
            </div>
          )}
        </div>

        {/* Key Detail Tags */}
        <div className="flex flex-wrap gap-2">
          {deal.keyDetails.slice(0, 3).map((detail) => (
            <span
              key={detail.label}
              className="text-xs bg-navy-50 text-navy-600 px-2.5 py-1 rounded-full font-medium"
            >
              {detail.label}: {detail.value}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
