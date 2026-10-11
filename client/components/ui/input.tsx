import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-linen bg-white px-5 text-[15px] text-ink shadow-none transition-all outline-none placeholder:text-taupe/70 focus-visible:border-gold focus-visible:ring-[3px] focus-visible:ring-gold/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
