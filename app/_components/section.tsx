import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="scroll-mt-28" id={id}>
      <div
        className={cn("container flex flex-col items-start gap-6", className)}
      >
        {children}
      </div>
    </section>
  );
}
