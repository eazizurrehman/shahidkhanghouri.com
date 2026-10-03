import { AreasOfInterest } from "@/app/_components/areas-of-interest";
import { Contact } from "@/app/_components/contact";
import { Education } from "@/app/_components/education";
import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";
import { LegalExperience } from "@/app/_components/legal-experience";
import { MootsAdvocacy } from "@/app/_components/moots-advocacy";
import { Profile } from "@/app/_components/profile";
import { Reveal } from "@/app/_components/reveal";
import { Skills } from "@/app/_components/skills";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shahid Khan Ghouri",
  jobTitle: "LLB Candidate",
  description:
    "LLB candidate at Hazara University, Mansehra, with experience in legal research, case-law analysis, and constitutional and human rights research.",
  url: "https://shahidkhanghouri.com",
  image: "https://shahidkhanghouri.com/shahid-khan-ghouri.webp",
  email: "mailto:hello@shahidkhanghouri.com",
  telephone: "+923055666789",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Hazara University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mansehra",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
  },
  knowsAbout: [
    "Legal Technology",
    "Legal Research",
    "Constitutional Law",
    "Human Rights",
    "Family Law",
    "Criminal Law",
    "Financial and Corporate Law",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Pashto", alternateName: "ps" },
    { "@type": "Language", name: "Urdu", alternateName: "ur" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
};

export default function Home() {
  return (
    <div className="size-full min-h-dvh">
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />
      <Header />
      <main
        className="relative mx-auto flex flex-col gap-14 pt-4 sm:gap-20"
        id="main"
      >
        <Hero />
        <Reveal>
          <Profile />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <LegalExperience />
        </Reveal>
        <Reveal>
          <MootsAdvocacy />
        </Reveal>
        <Reveal>
          <AreasOfInterest />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
