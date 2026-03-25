"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Menu, X, Phone, Truck } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy-900 leading-tight">
                Precision Truck
              </span>
              <span className="text-xs font-medium text-navy-500 tracking-wider uppercase">
                Capital
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-orange-600 bg-orange-50"
                    : "text-navy-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-primary !py-2.5 !px-6 text-sm">
              Get Pre-Approved
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-navy-900" />
            ) : (
              <Menu className="w-6 h-6 text-navy-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-orange-600 bg-orange-50"
                    : "text-navy-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-navy-700 font-medium"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center text-sm"
              >
                Get Pre-Approved
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
