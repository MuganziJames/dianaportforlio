"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";

// Project categories
type Category = "all" | "research" | "publications" | "initiatives";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: Category[];
  href?: string;
}

// Diana's research projects
const projects: Project[] = [
  {
    title: "Genomic Characterization of MDR Vibrio cholerae O1",
    description:
      "Peer-reviewed study published through Oxford University Press providing comprehensive genomic analysis of multidrug-resistant Vibrio cholerae strains from the 2022 cholera outbreak in Kenya.",
    tags: ["Genomics", "AMR", "Cholera", "Peer-Reviewed"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    category: ["research", "publications"],
  },
  {
    title: "Extended Dosing Intervals Trial — Euvichol-S",
    description:
      "Clinical research exploring optimized dosing intervals for the Euvichol-S oral cholera vaccine to enhance protective efficacy and inform public health immunization strategies.",
    tags: ["Clinical Trial", "Vaccine Research", "Public Health"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
    category: ["research"],
  },
  {
    title: "Antibiotic Use and AMR Knowledge Intervention",
    description:
      "Impact assessment evaluating a school-based intervention designed to improve children's understanding of antibiotic use and antimicrobial resistance for sustainable health outcomes.",
    tags: ["AMR", "Education", "Community Health"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    category: ["research", "initiatives"],
  },
  {
    title: "ESBL-Producing Vibrio cholerae Publication",
    description:
      "Genomic characterization of multidrug-resistant extended-spectrum β-lactamase-producing Vibrio cholerae O1 strains. Published in Oxford University Press, July 2025.",
    tags: ["Publication", "Oxford University Press", "2025"],
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    category: ["publications"],
  },
];

const filterTabs: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Research", value: "research" },
  { label: "Publications", value: "publications" },
  { label: "Initiatives", value: "initiatives" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <PageLayout
      watermarkText="Research."
      footerCtaText="Get In Touch"
      footerCtaHref="/contact"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Page Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Research & Initiatives.
        </h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`text-sm font-medium transition-all ${
                activeFilter === tab.value
                  ? "text-foreground"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}

          <a
            href="https://www.linkedin.com/in/diana-imoli-67829812a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-gray-600 ml-auto underline-link"
          >
            View LinkedIn
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <article key={index} className="group">
              {/* Project Image */}
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
