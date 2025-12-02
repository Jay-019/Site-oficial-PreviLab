import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExamCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  index: number;
}

export function ExamCard({ icon: Icon, title, description, onClick, index }: ExamCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group bg-card border border-border rounded-2xl p-6 text-left hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-up w-full"
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </button>
  );
}
