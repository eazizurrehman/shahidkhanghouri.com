import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading>Education</SectionHeading>
      <div className="flex w-full flex-col gap-8">
        <div className="relative flex flex-col gap-2 border-border border-l pl-6">
          <span className="absolute top-2.5 -left-[3.5px] size-1.5 rotate-45 bg-accent-brand" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold font-serif text-foreground text-lg">
              Bachelor of Laws (LLB)
            </h3>
            <span className="shrink-0 text-muted-foreground text-sm">
              2023 &ndash; Present
            </span>
          </div>
          <p className="text-[15px] text-foreground">
            Hazara University, Mansehra
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            7th semester &middot; CGPA 3.6
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Coursework: Constitutional Law, Criminal Law, Human Rights,
            Islamic/Muslim Personal Law
          </p>
        </div>
      </div>
    </Section>
  );
}
