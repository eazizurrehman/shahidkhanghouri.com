"use client";

import { Check, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/app/_shadcn/button";

const EMAIL = "hello@shahidkhanghouri.com";

export function CopyEmailIcon() {
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied");
      setIsCopied(true);
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error(`Couldn't copy — the email is ${EMAIL}`);
    }
  }

  return (
    <Button
      aria-label="Copy email"
      className="icon-action hover:cursor-pointer"
      onClick={copy}
      size="icon"
      variant="outline"
    >
      <span className="relative flex size-5 items-center justify-center">
        <Check
          className={`absolute size-5 transition-all duration-200 ${isCopied ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        />
        <Mail
          className={`absolute size-5 transition-all duration-200 ${isCopied ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
        />
      </span>
    </Button>
  );
}
