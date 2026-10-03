import type { ReactNode } from "react";
import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

function Role({
  position,
  organisation,
  period,
  children,
}: {
  position: string;
  organisation: string;
  period?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex flex-col gap-2 border-border border-l pl-6">
      <span className="absolute top-2.5 -left-[3.5px] size-1.5 rotate-45 bg-accent-brand" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold font-serif text-foreground text-lg">
          {position}
        </h3>
        {period && (
          <span className="shrink-0 text-muted-foreground text-sm">
            {period}
          </span>
        )}
      </div>
      <p className="text-[15px] text-foreground">{organisation}</p>
      <ul className="mt-1 flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

function Duty({ children }: { children: ReactNode }) {
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

export function LegalExperience() {
  return (
    <Section id="experience">
      <SectionHeading>Legal Experience</SectionHeading>
      <div className="stagger flex w-full flex-col gap-8">
        <Role
          organisation="Battagram Students' Society, Hazara University"
          position="Legal Advisor"
        >
          <Duty>
            Advise the society on procedural and compliance matters relating to
            its events and activities.
          </Duty>
          <Duty>
            Represent the department and class in multiple university-level
            cases and competitions.
          </Duty>
          <Duty>
            Liaise between faculty, students, and society members on matters
            requiring legal input, including academic and disciplinary issues.
          </Duty>
        </Role>

        <Role
          organisation="Faculty Support, Hazara University"
          position="Legal Research Assistant"
        >
          <Duty>
            Assisted faculty with legal research for research papers, theses,
            and publications.
          </Duty>
          <Duty>
            Supported thesis preparation and defence/viva readiness for LLB
            students, including compiling case law and statutory references.
          </Duty>
          <Duty>
            Helped structure arguments and identify relevant precedents to
            strengthen research submissions.
          </Duty>
        </Role>

        <Role
          organisation="Hazara University"
          position="Student Support to Persons with Disabilities"
        >
          <Duty>
            Served in a provisional ombudsperson capacity, addressing grievances
            of persons with disabilities (PWDs) through institutional due
            process.
          </Duty>
          <Duty>
            Lodged applications in controller offices and filed complaints on
            behalf of PWD students.
          </Duty>
          <Duty>
            Provided legal assistance and advocacy to PWD students, including
            guidance on institutional rights and accommodations.
          </Duty>
          <Duty>
            Gained office-work experience supporting administrative and
            grievance-redress processes for PWD-related matters.
          </Duty>
        </Role>
      </div>
    </Section>
  );
}
