import type { ReactNode } from "react";
import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

function SkillGroup({
  category,
  children,
}: {
  category: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-border border-t pt-4 sm:flex-row sm:gap-6">
      <h3 className="shrink-0 font-semibold font-serif text-foreground sm:w-52">
        {category}
      </h3>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

function Skill({ children }: { children: ReactNode }) {
  return (
    <li className="text-[15px] text-muted-foreground leading-relaxed">
      {children}
    </li>
  );
}

function Language({ name, level }: { name: string; level: string }) {
  return (
    <div className="flex gap-2">
      <dt className="font-semibold font-serif text-foreground">{name}</dt>
      <dd className="text-muted-foreground">{level}</dd>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading>Skills &amp; Languages</SectionHeading>
      <div className="stagger flex w-full flex-col gap-4">
        <SkillGroup category="Research & Analysis">
          <Skill>
            Legal research and case law analysis using national precedents and
            statutory materials
          </Skill>
          <Skill>
            AI-driven legal research tools for faster case-law retrieval and
            drafting support
          </Skill>
          <Skill>
            Constitutional rights research and analysis of institutional/legal
            due process
          </Skill>
          <Skill>
            Statutory interpretation and construction of clear, well-supported
            legal arguments
          </Skill>
          <Skill>
            Ability to analyze research and apply it to the facts of a case
          </Skill>
          <Skill>
            Ability to synthesize complex information into clear, persuasive
            analysis
          </Skill>
        </SkillGroup>

        <SkillGroup category="Drafting & Writing">
          <Skill>
            Drafting of pleadings, plaints, applications, petitions, writs, stay
            applications, appeals, rejoinders, and legal correspondence
          </Skill>
          <Skill>
            Plain, precise legal writing &mdash; reducing legalese into clear,
            accessible language
          </Skill>
        </SkillGroup>

        <SkillGroup category="Advocacy">
          <Skill>Moot court advocacy and courtroom-style presentation</Skill>
          <Skill>
            Persuasive oral argument and structured case presentation
          </Skill>
        </SkillGroup>

        <SkillGroup category="Grievance Redress & Interviewing">
          <Skill>
            Institutional grievance redress &mdash; ombudsman mechanisms,
            lodging applications, and filing complaints
          </Skill>
          <Skill>
            Client and student interviewing, fact-gathering, and legal
            assistance (including to PWDs)
          </Skill>
        </SkillGroup>

        <SkillGroup category="Professional">
          <Skill>Attention to detail with disciplined preparation</Skill>
          <Skill>
            Strong verbal and written communication, adaptable to courts,
            clients, and academic settings
          </Skill>
          <Skill>
            Diplomacy, patience, and ability to work constructively with people
            under workload
          </Skill>
        </SkillGroup>

        <div className="flex flex-col gap-2 border-border border-t pt-4 sm:flex-row sm:gap-6">
          <h3 className="shrink-0 font-semibold font-serif text-foreground sm:w-52">
            Languages
          </h3>
          <dl className="flex flex-wrap gap-x-6 gap-y-1.5 text-[15px]">
            <Language level="Native" name="Pashto" />
            <Language level="Fluent" name="Urdu" />
            <Language level="Fluent" name="English" />
          </dl>
        </div>
      </div>
    </Section>
  );
}
