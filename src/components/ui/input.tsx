import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

// Custom Input component with all normal HTML input props
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  const inputClasses = cn(
    "w-full rounded-lg bg-background text-foreground placeholder:text-muted-foreground outline-none transition-colors mt-1 h-12 px-4 border",
    className,
    error
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary",
  );

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>

      <input {...props} className={inputClasses} />
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
