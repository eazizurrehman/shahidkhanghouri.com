import Image from "next/image";
import { DownloadCv } from "@/app/_components/download-cv";
import { SocialIcons } from "@/app/_components/social-icons";

export function Hero() {
  return (
    <section
      className="container flex scroll-mt-28 flex-col items-start gap-6 pt-14 sm:pt-20"
      id="hero"
    >
      <div className="flex xs:flex-row flex-col items-start xs:items-center gap-5">
        <div className="portrait-plate size-28 shrink-0 rounded-sm sm:size-32">
          <Image
            alt="Portrait of Shahid Khan Ghouri"
            className="size-full object-cover object-top"
            height={640}
            priority
            sizes="128px"
            src="/shahid-khan-ghouri.webp"
            width={640}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="small-caps text-muted-foreground text-sm">
            LLB Candidate &middot; Hazara University &middot; 7th Semester
          </span>
          <h1 className="font-semibold font-serif text-4xl text-foreground tracking-tight sm:text-5xl">
            Shahid Khan Ghouri
          </h1>
        </div>
      </div>

      <p className="max-w-xl text-[17px] text-muted-foreground leading-relaxed">
        Law student at Hazara University, Mansehra, with hands-on experience in
        legal research, case-law analysis, and statutory interpretation,
        including constitutional rights and human rights research.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <DownloadCv className="btn-primary" />
        <a
          className="btn-outline inline-flex items-center rounded-sm px-5 py-2.5 font-medium text-sm"
          href="#contact"
        >
          Get in touch
        </a>
        <SocialIcons />
      </div>

      <p className="w-full border-border border-t pt-6 text-muted-foreground text-sm">
        Bachelor of Laws (LLB), Hazara University, Mansehra &middot; 2023
        &ndash; Present &middot; CGPA 3.6
      </p>
    </section>
  );
}
