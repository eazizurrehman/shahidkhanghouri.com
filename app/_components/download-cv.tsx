"use client";

import { LoaderCircle } from "lucide-react";
import { type MouseEvent, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const FILENAME = "Shahid Khan Ghouri - CV.pdf";

export function DownloadCv({ className }: { className?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  async function download(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/cv", { cache: "no-store" });
      if (!response.ok) throw new Error(String(response.status));

      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = FILENAME;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      toast.error("Couldn't download the CV. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <a
      aria-busy={isLoading}
      aria-disabled={isLoading}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-medium text-sm",
        isLoading && "cursor-progress",
        className,
      )}
      download={FILENAME}
      href="/cv"
      onClick={download}
    >
      {isLoading && (
        <LoaderCircle
          aria-hidden
          className="size-4 animate-spin motion-reduce:animate-none"
        />
      )}
      <span aria-live="polite">
        {isLoading ? "Preparing CV…" : "Download CV (PDF)"}
      </span>
    </a>
  );
}
