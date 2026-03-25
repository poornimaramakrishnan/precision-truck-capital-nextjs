interface TrustBarProps {
  items: { value: string; label: string }[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-navy-950 border-y border-navy-800">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">{item.value}</div>
              <div className="mt-1 text-sm text-gray-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
