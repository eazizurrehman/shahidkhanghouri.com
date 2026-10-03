import type { ReactNode } from "react";
import { Section } from "@/app/_components/section";
import { SectionHeading } from "@/app/_components/section-heading";

function Area({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-border border-t pt-4 sm:flex-row sm:gap-6">
      <dt className="shrink-0 font-semibold font-serif text-foreground sm:w-52">
        {name}
      </dt>
      <dd className="text-[15px] text-muted-foreground leading-relaxed">
        {children}
      </dd>
    </div>
  );
}

export function AreasOfInterest() {
  return (
    <Section id="interests">
      <SectionHeading>Areas of Interest</SectionHeading>
      <dl className="stagger flex w-full flex-col gap-4">
        <Area name="Legal Technology & Research Innovation">
          AI-driven case-law research, legal-tech tools, and digital
          transformation of legal research and drafting workflows.
        </Area>
        <Area name="Constitutional Law">
          Constitutional rights, judicial review of governmental action, and
          constitutional proceedings including public interest litigation (PIL).
        </Area>
        <Area name="Human Rights">
          Human rights research, Islamic human rights, and public interest
          issues.
        </Area>
        <Area name="Family Law">
          Matrimonial disputes, custody, maintenance, and out-of-court
          settlement of family matters.
        </Area>
        <Area name="Criminal Law">
          Trial procedure, bail matters, right to fair trial, and criminal
          defence strategy.
        </Area>
        <Area name="Financial & Corporate Law">
          Contracts, corporate compliance, and commercial dispute resolution.
        </Area>
      </dl>
    </Section>
  );
}
