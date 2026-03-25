import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Precision Truck Capital | Commercial Truck Financing — Direct Lender",
    template: "%s | Precision Truck Capital",
  },
  description:
    "Direct lender specializing in commercial truck financing, trailer loans, and engine overhaul financing. Approvals in hours. Bad credit welcome. Serving all 48 states.",
  keywords: [
    "commercial truck financing",
    "truck loans",
    "semi truck financing",
    "trailer financing",
    "engine overhaul financing",
    "owner operator loans",
    "bad credit truck financing",
    "direct lender",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Precision Truck Capital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
