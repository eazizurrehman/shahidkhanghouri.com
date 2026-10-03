import type { ReactNode } from "react";
import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

function Objective({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
      <span
        aria-hidden
        className="mt-[0.7em] h-px w-3 shrink-0 bg-accent-brand"
      />
      <span>{children}</span>
    </li>
  );
}

export function Profile() {
  return (
    <Section id="profile">
      <SectionHeading>Profile</SectionHeading>
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-[17px] text-muted-foreground leading-relaxed">
          I am a seventh-semester Bachelor of Laws (LLB) student at Hazara
          University, Mansehra, with a CGPA of 3.6. My work so far has centred
          on legal research, case-law analysis, and statutory interpretation,
          including research on constitutional rights and human rights.
        </p>
        <p className="text-[17px] text-muted-foreground leading-relaxed">
          Alongside my studies, I have supported faculty research and thesis
          preparation, taken part in moot court competitions, and assisted
          students with disabilities through institutional grievance-redress
          processes. I have a strong interest in legal technology and AI-driven
          research tools, and I am comfortable working independently, meeting
          deadlines, and collaborating in remote settings.
        </p>
      </div>

      <div className="flex max-w-2xl flex-col gap-3">
        <h3 className="font-semibold font-serif text-foreground text-lg">
          Career objectives
        </h3>
        <ul className="flex flex-col gap-2">
          <Objective>
            Strengthen my understanding of legal proceedings in civil and
            criminal courts, constitutional matters, quasi-judicial forums, and
            ombudsman mechanisms, including the federal and tax ombudsman.
          </Objective>
          <Objective>
            Improve my legal drafting across plaints, miscellaneous
            applications, writs, notices, stay applications, appeals,
            rejoinders, and pleadings, including in service tribunal matters.
          </Objective>
          <Objective>
            Deepen my understanding of disciplinary proceedings &mdash; having
            observed employee disciplinary proceedings, I want to learn how such
            matters are conducted and adjudicated in courts.
          </Objective>
          <Objective>
            Improve my courtroom presentation and argumentation skills.
          </Objective>
          <Objective>
            Learn how judicial review is applied to governmental actions and
            administrative decisions.
          </Objective>
          <Objective>
            Build an understanding of mutual legal assistance frameworks in
            transnational crimes and offences.
          </Objective>
        </ul>
      </div>

      <p className="max-w-2xl text-[15px] text-muted-foreground leading-relaxed">
        Outside the law, I enjoy debating, reading, and cooking.
      </p>
    </Section>
  );
}
