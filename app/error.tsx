"use client";

import { Button } from "@/app/_shadcn/button";

export default function AppError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="small-caps text-accent-brand text-sm">Error</span>
      <h1 className="font-semibold font-serif text-3xl text-foreground tracking-tight sm:text-4xl">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground leading-relaxed">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
