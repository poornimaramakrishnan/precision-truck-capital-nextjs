import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Precision Truck</span>
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">
                  Capital
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Direct lender specializing in commercial truck financing, trailer loans, and engine
              overhaul financing. Serving American truckers for over 45 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Truck Purchase Financing",
                "Trailer Financing",
                "Engine Overhaul Loans",
                "Fleet Expansion",
                "Startup Programs",
                "Lease-to-Own",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-xs mt-0.5">{siteConfig.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
