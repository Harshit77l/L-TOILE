import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-2xl border border-linen bg-white px-5 py-3 text-[15px] text-ink outline-none placeholder:text-taupe/70 focus-visible:border-gold focus-visible:ring-[3px] focus-visible:ring-gold/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
