interface Step {
  step: number;
  title: string;
  description: string;
}

interface StepsTimelineProps {
  heading: string;
  subheading?: string;
  steps: Step[];
}

export default function StepsTimeline({ heading, subheading, steps }: StepsTimelineProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-2 text-navy-900">{heading}</h2>
          {subheading && (
            <p className="mt-4 text-lg text-navy-600 max-w-2xl mx-auto">{subheading}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-200" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/20">
                  <span className="text-2xl font-bold text-white">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
