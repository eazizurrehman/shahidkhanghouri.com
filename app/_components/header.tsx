import { MobileNav } from "@/app/_components/mobile-nav";
import { NavLinks } from "@/app/_components/nav-links";
import { ThemeToggle } from "@/app/_components/theme-toggle";

const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Interests", href: "#interests" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-100 w-full border-border border-b bg-background/80 py-4 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4">
        <a
          className="shrink-0 whitespace-nowrap font-semibold font-serif text-foreground text-lg tracking-tight"
          href="#hero"
        >
          Shahid Khan Ghouri
        </a>

        <nav
          aria-label="Primary"
          className="flex items-center gap-3 text-sm md:gap-4"
        >
          <NavLinks links={navLinks} />
          <ThemeToggle />
          <MobileNav links={navLinks} />
        </nav>
      </div>
    </header>
  );
}
