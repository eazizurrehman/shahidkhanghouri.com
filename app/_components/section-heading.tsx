import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold font-serif text-2xl text-foreground tracking-tight sm:text-3xl">
        {children}
      </h2>
      <span aria-hidden className="rule-brass" />
    </div>
  );
}
