"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type NavLink = { label: string; href: string };

export function NavLinks({ links }: { links: NavLink[] }) {
  const [active, setActive] = useState<string>("");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ids = links.map((link) => link.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of sections) observer.observe(section);

    function onScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(links[links.length - 1].href);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [links]);

  useEffect(() => {
    function measure() {
      const list = listRef.current;
      const link = list?.querySelector<HTMLElement>(`a[href="${active}"]`);
      if (!link) {
        setIndicator((current) => ({ ...current, width: 0 }));
        return;
      }
      setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <ul className="relative hidden items-center gap-4 md:flex" ref={listRef}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            className={cn(
              "inline-block py-1 transition-colors hover:text-foreground",
              active === link.href
                ? "text-foreground"
                : "text-muted-foreground",
            )}
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
      <span
        aria-hidden
        className="nav-indicator absolute bottom-0 left-0 h-px bg-accent-brand"
        style={{
          width: `${indicator.width}px`,
          transform: `translateX(${indicator.left}px)`,
          opacity: indicator.width ? 1 : 0,
        }}
      />
    </ul>
  );
}
