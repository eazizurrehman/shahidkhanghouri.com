import { FileText } from "lucide-react";
import { Button } from "@/app/_shadcn/button";

export function OpenCv() {
  return (
    <Button asChild className="icon-action" size="icon" variant="outline">
      <a aria-label="View CV" href="/cv" rel="noopener" target="_blank">
        <FileText className="size-5" />
      </a>
    </Button>
  );
}
