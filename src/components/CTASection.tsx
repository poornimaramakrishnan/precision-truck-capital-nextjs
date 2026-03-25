import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "orange";
}

export default function CTASection({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CTASectionProps) {
  const bgClass =
    variant === "orange"
      ? "bg-gradient-to-r from-orange-500 to-orange-600"
      : "bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950";

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative container-custom py-16 md:py-24 text-center">
        <h2 className="heading-2 text-white max-w-3xl mx-auto">{heading}</h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className={
                variant === "orange"
                  ? "btn-secondary !border-white !text-white hover:!bg-white hover:!text-orange-600"
                  : "btn-primary text-base"
              }
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn-outline-white text-base">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
