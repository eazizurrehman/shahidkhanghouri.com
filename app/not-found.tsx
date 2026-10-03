import Link from "next/link";
import { Button } from "@/app/_shadcn/button";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-semibold font-serif text-7xl text-accent-brand tracking-tight sm:text-8xl">
        404
      </span>
      <h1 className="font-semibold font-serif text-3xl text-foreground tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground leading-relaxed">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
