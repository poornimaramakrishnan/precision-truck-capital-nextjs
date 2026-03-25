import {
  Shield,
  Users,
  CreditCard,
  Zap,
  Truck,
  Package,
  HardHat,
  Anchor,
  Container,
  Wrench,
  TrendingUp,
  Star,
  Key,
  FileText,
  DollarSign,
  Headphones,
  Megaphone,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  CreditCard,
  Zap,
  Truck,
  Package,
  HardHat,
  Anchor,
  Container,
  Wrench,
  TrendingUp,
  Star,
  Key,
  FileText,
  DollarSign,
  Headphones,
  Megaphone,
  Handshake,
};

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  highlights?: string[];
  variant?: "default" | "compact" | "centered";
}

export function IconCard({
  icon,
  title,
  description,
  highlights,
  variant = "default",
}: IconCardProps) {
  const IconComponent = iconMap[icon] || Shield;

  if (variant === "centered") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 text-center group">
        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-100 transition-colors">
          <IconComponent className="w-7 h-7 text-orange-500" />
        </div>
        <h3 className="heading-3 text-navy-900 mb-3">{title}</h3>
        <p className="text-navy-600 leading-relaxed">{description}</p>
        {highlights && (
          <ul className="mt-4 space-y-2">
            {highlights.map((h) => (
              <li key={h} className="text-sm text-navy-500 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group">
      <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
        <IconComponent className="w-7 h-7 text-orange-500" />
      </div>
      <h3 className="heading-3 text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-600 leading-relaxed">{description}</p>
      {highlights && (
        <ul className="mt-4 space-y-2">
          {highlights.map((h) => (
            <li key={h} className="text-sm text-navy-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IconCard;
