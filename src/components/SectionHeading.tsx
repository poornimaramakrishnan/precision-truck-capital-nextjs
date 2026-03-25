interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className={`heading-2 ${light ? "text-white" : "text-navy-900"}`}>{heading}</h2>
      {subheading && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-navy-600"}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
