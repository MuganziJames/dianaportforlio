import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout
      watermarkText="DIANA"
      footerCtaText="See More About Me"
      footerCtaHref="/about"
      noScroll={true}
    >
      <div className="h-full flex flex-col">
        <section className="px-8 md:px-16 lg:px-24 flex-1 flex flex-col justify-center">
          {/* Large Name Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
            DIANA IMOLI, MSc
          </h1>

          {/* Introduction Paragraphs */}
          <div className="max-w-4xl space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg leading-relaxed">
            <p>
              Biotechnologist | Microbiologist | Scientific Researcher at KEMRI.
              I am dedicated to antimicrobial resistance research, genomic
              characterization of pathogens, and laboratory quality assurance
              through
              <Link href="/projects" className="inline-link mx-1">
                RESEARCH
              </Link>
              that informs public health interventions in Kenya and East Africa.
            </p>

            <p>
              My work spans outbreak genomics, field surveillance, and
              interventions bridging laboratory insights with real-world
              <Link href="/about" className="inline-link mx-1">
                IMPACT
              </Link>
              contributing to scientific evidence used by policymakers.
              Interested in collaboration? Feel free to
              <Link href="/contact" className="inline-link mx-1">
                CONTACT ME
              </Link>
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
