import { DownloadCv } from "@/app/_components/download-cv";
import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading>Contact</SectionHeading>
      <p className="max-w-xl text-[17px] text-muted-foreground leading-relaxed">
        I welcome enquiries about internships, research assistantships, and moot
        or academic collaboration.
      </p>
      <dl className="flex flex-col gap-2 text-[15px]">
        <div className="flex gap-3">
          <dt className="w-24 shrink-0 text-muted-foreground">Email</dt>
          <dd>
            <a className="text-link" href="mailto:hello@shahidkhanghouri.com">
              hello@shahidkhanghouri.com
            </a>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 shrink-0 text-muted-foreground">WhatsApp</dt>
          <dd>
            <a
              className="text-link"
              href="https://wa.me/923055666789"
              rel="noopener"
              target="_blank"
            >
              +92 305 5666789
            </a>
          </dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-3">
        <a
          className="btn-primary inline-flex items-center rounded-sm px-5 py-2.5 font-medium text-sm"
          href="mailto:hello@shahidkhanghouri.com"
        >
          Email me
        </a>
        <DownloadCv className="btn-outline" />
      </div>
    </Section>
  );
}
