import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

export function MootsAdvocacy() {
  return (
    <Section id="moots">
      <SectionHeading>Moots &amp; Advocacy</SectionHeading>
      <div className="stagger flex w-full flex-col gap-8">
        <div className="relative flex flex-col gap-2 border-border border-l pl-6">
          <span className="absolute top-2.5 -left-[3.5px] size-1.5 rotate-45 bg-accent-brand" />
          <h3 className="font-semibold font-serif text-foreground text-lg">
            Moot Court Competitions &amp; Seminars
          </h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Participant in multiple seminars and moot court competitions.
          </p>
        </div>
        <div className="relative flex flex-col gap-2 border-border border-l pl-6">
          <span className="absolute top-2.5 -left-[3.5px] size-1.5 rotate-45 bg-accent-brand" />
          <h3 className="font-semibold font-serif text-foreground text-lg">
            Speaker, Career Counseling Program
          </h3>
          <p className="text-[15px] text-foreground">Hazara University</p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Guided junior students on legal career pathways.
          </p>
        </div>
      </div>
    </Section>
  );
}
