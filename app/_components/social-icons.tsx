import { WhatsappIcon } from "@/app/_components/brand-icons";
import { CopyEmailIcon } from "@/app/_components/copy-email-icon";
import { OpenCv } from "@/app/_components/open-cv";
import { Button } from "@/app/_shadcn/button";

export function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      <OpenCv />
      <CopyEmailIcon />
      <Button asChild className="icon-action" size="icon" variant="outline">
        <a
          aria-label="WhatsApp"
          href="https://wa.me/923055666789"
          rel="noopener"
          target="_blank"
        >
          <WhatsappIcon />
        </a>
      </Button>
    </div>
  );
}
