"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/app/_shadcn/button";

type NavLink = { label: string; href: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    navRef.current?.querySelector("a")?.focus();

    function close(returnFocus: boolean) {
      setOpen(false);
      if (returnFocus) triggerRef.current?.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close(true);
    }

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close(false);
    }

    function onFocusIn(event: FocusEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open]);

  return (
    <div className="relative md:hidden" ref={containerRef}>
      <Button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="text-muted-foreground hover:text-foreground"
        onClick={() => setOpen((value) => !value)}
        ref={triggerRef}
        size="icon"
        variant="ghost"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {open && (
        <nav
          className="fade-in slide-in-from-top-2 absolute right-0 mt-2 min-w-40 animate-in rounded-md border border-border/60 bg-background/90 p-1 shadow-lg backdrop-blur-md duration-200 motion-reduce:animate-none"
          id={menuId}
          ref={navRef}
        >
          <ul className="flex flex-col text-muted-foreground text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="block rounded-sm px-3 py-2 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
