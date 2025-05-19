import { Award, Star, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProfileBadgeProps {
  type?: "bronze" | "silver" | "gold" | "platinum";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export default function ProfileBadge({ type = "bronze", size = "md", label, className }: ProfileBadgeProps) {
  const badges = {
    bronze: {
      icon: Award,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    silver: {
      icon: Star,
      color: "bg-slate-100 text-slate-700 border-slate-200",
    },
    gold: {
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    },
    platinum: {
      icon: Trophy,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
  }

  const sizes = {
    sm: "h-6 text-xs",
    md: "h-8 text-sm",
    lg: "h-10 text-base",
  }

  const { icon: Icon, color } = badges[type] || badges.bronze
  const sizeClass = sizes[size] || sizes.md

  return (
    <div className={cn("inline-flex items-center gap-1 rounded-full border px-3", color, sizeClass, className)}>
      <Icon className="h-3.5 w-3.5" />
      <span className="font-medium">{label || type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </div>
  )
}
