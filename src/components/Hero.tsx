import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgImage?: string;
  overlay?: boolean;
  size?: "large" | "medium";
}

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  bgImage,
  overlay = true,
  size = "medium",
}: HeroProps) {
  const heightClass = size === "large" ? "min-h-[70vh]" : "min-h-[50vh]";

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Gradient Background Fallback */}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
      )}

      {/* Overlay */}
      {overlay && bgImage && (
        <div className="absolute inset-0 bg-navy-950/70" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-20">
        <h1 className="heading-1 text-white max-w-4xl mx-auto leading-tight">
          {headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary text-base">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-outline-white text-base">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
