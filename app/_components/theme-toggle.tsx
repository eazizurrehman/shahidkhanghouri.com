"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/app/_shadcn/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground"
      onClick={() =>
        setTheme(
          document.documentElement.classList.contains("dark")
            ? "light"
            : "dark",
        )
      }
      size="icon"
      variant="ghost"
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="size-5 dark:hidden" />
    </Button>
  );
}
