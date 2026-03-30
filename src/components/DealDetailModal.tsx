"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowRight,
  MapPin,
} from "lucide-react";
import type { FundedDeal } from "@/data/funded-deals";

interface DealDetailModalProps {
  deal: FundedDeal | null;
  onClose: () => void;
}

export default function DealDetailModal({ deal, onClose }: DealDetailModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Reset image index when deal changes
  useEffect(() => {
    setCurrentImage(0);
  }, [deal]);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Arrow keys for gallery
  const nextImage = useCallback(() => {
    if (!deal) return;
    setCurrentImage((prev) => (prev + 1) % deal.gallery.length);
  }, [deal]);

  const prevImage = useCallback(() => {
    if (!deal) return;
    setCurrentImage((prev) => (prev - 1 + deal.gallery.length) % deal.gallery.length);
  }, [deal]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextImage, prevImage]);

  // Lock body scroll
  useEffect(() => {
    if (deal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [deal]);

  if (!deal) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-navy-950/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full my-auto shadow-2xl relative animate-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-navy-900" />
        </button>

        {/* ─── Image Gallery ─── */}
        <div className="relative h-72 md:h-96 rounded-t-3xl overflow-hidden bg-navy-100">
          <Image
            src={deal.gallery[currentImage]}
            alt={`${deal.projectName} — Image ${currentImage + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

          {/* Gallery navigation */}
          {deal.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-navy-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-navy-900" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {deal.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentImage
                        ? "bg-orange-400 w-6"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="inline-block px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full mb-3">
              {deal.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {deal.projectName}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {deal.clientName} · {deal.location}
            </div>
          </div>
        </div>

        {/* ─── Content Body ─── */}
        <div className="p-6 md:p-10">
          {/* Key Details Grid — the "ACF repeater" */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {deal.keyDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <span className="text-xs font-semibold text-navy-400 uppercase tracking-wider block mb-1">
                  {detail.label}
                </span>
                <span className="text-sm font-bold text-navy-900 leading-snug">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description — the "WYSIWYG editor" content */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-navy-900 mb-3">The Story</h3>
            <p className="text-navy-600 leading-relaxed">{deal.description}</p>
          </div>

          {/* Testimonial */}
          {deal.testimonial && (
            <div className="bg-navy-50 rounded-2xl p-6 md:p-8 mb-8 relative">
              <Quote className="w-8 h-8 text-orange-300 absolute top-6 right-6 opacity-50" />
              <p className="text-navy-700 italic leading-relaxed text-lg">
                &ldquo;{deal.testimonial}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-600 font-bold text-sm">
                  {deal.clientName.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-navy-900 text-sm block">
                    {deal.clientName}
                  </span>
                  <span className="text-navy-500 text-xs">
                    {deal.clientTitle} · {deal.location}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Amount funded badge + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
            <div>
              <span className="text-sm text-navy-500">Total Funded</span>
              <span className="block text-3xl font-extrabold text-orange-500">
                {deal.amountFunded}
              </span>
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
              onClick={onClose}
            >
              Get Your Deal Funded <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
