import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

// Custom Input component with all normal HTML input props
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  const inputClasses = cn(
    "w-full rounded-lg bg-background text-foreground placeholder:text-muted-foreground outline-none transition-colors mt-1 h-12 px-4 border border-border focus:border-primary",
    className,
  );

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>

      <input {...props} className={inputClasses} />
    </div>
  );
}
