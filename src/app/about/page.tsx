import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsCalendar, BsBriefcase } from "react-icons/bs";
import { FaMicroscope, FaDna, FaFlask } from "react-icons/fa";

// Expertise data
const skills = [
  {
    title: "Laboratory Quality Assurance",
    icon: <FaFlask className="ml-1 inline" />,
    link: { text: "View Research", href: "/projects" },
    description:
      "With rigorous training in laboratory protocols and quality management systems, I ensure accuracy and reliability in microbiological testing. My expertise spans biosafety practices, equipment calibration, and compliance with national and international laboratory standards — critical for producing trustworthy research outcomes.",
  },
  {
    title: "Microbial Genomics",
    icon: <FaDna className="ml-1 inline" />,
    link: { text: "View Publications", href: "/projects" },
    description:
      "I specialize in genomic characterization of pathogens, utilizing next-generation sequencing and bioinformatics tools to understand antimicrobial resistance mechanisms. This work provides critical insights into outbreak dynamics and informs surveillance strategies across East Africa.",
  },
  {
    title: "Antimicrobial Resistance Research",
    icon: <FaMicroscope className="ml-1 inline" />,
    link: { text: "View Projects", href: "/projects" },
    description:
      "As a researcher at KEMRI, I lead and collaborate on projects addressing the growing threat of antimicrobial resistance (AMR). My work bridges laboratory findings with public health policy, contributing to evidence-based interventions that strengthen health systems in Kenya and the wider region.",
  },
];

// Experience data
const experience = [
  {
    title: "Scientific Researcher",
    company: "Kenya Medical Research Institute (KEMRI)",
    type: "Full-Time",
    period: "February 2021 – Present",
    location: "Nairobi, Kenya",
    description:
      "Contributing to nationally significant biomedical and public health research. Focus areas include microbiology, AMR, genomic characterization, and laboratory quality assurance. Actively involved in outbreak investigations, surveillance, and vaccine research trials.",
    skills: [
      "Laboratory Quality Assurance",
      "Microbial Genomics",
      "AMR Research",
      "Scientific Communication",
    ],
  },
  {
    title: "Customer Service Advocate",
    company: "Tala",
    type: "Contract",
    period: "September 2018 – November 2019",
    location: "Nairobi, Kenya",
    description:
      "Developed strong professional skills in communication, problem-solving, and client engagement within a technology-driven environment. Managed diverse stakeholder needs while ensuring data protection compliance.",
    skills: [
      "Customer Experience",
      "Professional Communication",
      "Data Handling",
      "Process Improvement",
    ],
  },
  {
    title: "Internship Trainee",
    company: "Kenya Plant Health Inspectorate Service (KEPHIS)",
    type: "Internship",
    period: "September 2017 – August 2018",
    location: "Nairobi, Kenya",
    description:
      "Gained foundational hands-on experience in laboratory procedures, quality control, and biosafety practices. Supported plant health analyses and inspection processes essential for agricultural protection.",
    skills: [
      "Laboratory Techniques",
      "Biosafety Practices",
      "Quality Control",
      "Regulatory Compliance",
    ],
  },
];

// Education & Certifications
const reads = [
  {
    title: "Master of Science in Microbiology",
    source: "Kenyatta University",
    year: "2020 - 2023",
    description:
      "Advanced study in microbial genetics, pathogenesis, and laboratory research methodologies. Thesis focused on antimicrobial resistance patterns in clinical isolates.",
  },
  {
    title: "Bachelor of Science in Biotechnology & Biosafety",
    source: "University of Eldoret",
    year: "2014 - 2018",
    description:
      "Comprehensive foundation in molecular biology, genetic engineering, biosafety regulations, and biotechnological applications in health and agriculture.",
  },
  {
    title: "CPHIA 2025 Young Investigator Award",
    source: "Africa CDC",
    year: "2025",
    description:
      "Awarded for innovative contributions to antimicrobial resistance research and outstanding scientific impact in public health.",
  },
  {
    title: "Best Presentation (AMR Session)",
    source: "Kenya AMR Scientific Symposium, KEMRI",
    year: "2024",
    description:
      "Recognized for excellence in presenting research findings on antimicrobial resistance at the national scientific symposium.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      watermarkText="About Me."
      footerCtaText="Lets Continue To Projects"
      footerCtaHref="/projects"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Page Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
          About Me.
        </h1>

        {/* Skills Section */}
        <section className="space-y-12 mb-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-[4px] top-8 bottom-0 w-[1px] bg-black/10"></div>

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border-t border-black/10 pt-8 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <span className="section-bullet"></span>
                  {skill.title}
                  {skill.icon}
                </h2>
                <Link
                  href={skill.link.href}
                  className="underline-link text-sm font-medium"
                >
                  {skill.link.text}
                </Link>
              </div>
              <p className="text-lg leading-relaxed max-w-5xl pl-6">
                {skill.description}
              </p>
            </div>
          ))}
        </section>
        {/* Experience Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Experience.
          </h3>

          <div className="space-y-10 relative">
            {/* Vertical Line */}
            <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {experience.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold flex items-center flex-wrap gap-2">
                      <span className="section-bullet"></span>
                      {exp.title}
                      <span className="font-normal text-gray-500">
                        — {exp.company}
                      </span>
                    </h4>
                    <p className="text-sm text-gray-500 pl-6 mt-1">
                      {exp.type} · {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm pl-6 md:pl-0">
                    <BsBriefcase />
                    {exp.period}
                  </div>
                </div>
                <p className="text-base leading-relaxed max-w-5xl pl-6 text-gray-700 mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pl-6">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* My Reads Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Education & Recognition.
          </h3>

          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {reads.map((read) => (
              <div
                key={read.title}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold flex items-center">
                    <span className="section-bullet"></span>
                    {read.title}
                    <span className="font-normal text-gray-500 ml-2">
                      {read.source}
                    </span>
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
                    <BsCalendar />
                    {read.year}
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-5xl pl-6 text-gray-700">
                  {read.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
