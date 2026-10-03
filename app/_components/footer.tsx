import { SocialIcons } from "@/app/_components/social-icons";

export function Footer() {
  return (
    <footer className="container mt-12 mb-16 sm:mt-16">
      <div className="flex w-full flex-col-reverse items-start justify-between gap-5 border-border border-t pt-8 sm:flex-row sm:items-center">
        <span className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Shahid Khan Ghouri
        </span>
        <SocialIcons />
      </div>
    </footer>
  );
}
