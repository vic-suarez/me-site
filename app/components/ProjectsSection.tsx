"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "web": return "bg-blue-500/90"
      case "app": return "bg-purple-500/90"
      case "product": return "bg-[#2E8B57]/90"
      case "data": return "bg-amber-500/90"
      case "tech": return "bg-gray-700/90"
      default: return "bg-[#2E8B57]/90"
    }
  }

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A personal website designed to showcase my work and story through clean design, smart interactions, and strong UX. Built to reflect who I am, what I've done, and what I can build next.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
      category: "Web",
      image: "/images/projects-me-site.png",
      link: "/projects/portfolio-site",
    },
    {
      id: 2,
      title: "🎴 RvK – Pokémon Card App",
      description: "A smarter way to sell your cards locally — without calculators, spreadsheets, or currency confusion. Built for Latin American collectors who need quick, accurate price quotes.",
      tags: ["React Native", "Expo", "TypeScript", "React Navigation"],
      category: "App",
      image: "/images/projects-rvk.png",
      link: "/projects/rvk",
    },
    {
      id: 3,
      title: "💱 Currency Snap",
      description: "Real-time mobile app using computer vision to detect Japanese price tags and convert them to local currencies.",
      tags: ["React Native", "Google Cloud Vision API", "ExchangeRate API"],
      category: "App",
      image: "/images/projects-currency-snap.png",
      link: "/projects/currency-snap",
    },
    {
      id: 4,
      title: "🚚 Delivery Platform",
      description: "Led the creation of a nationwide delivery management platform, from last-mile logistics to a web-based tracking system for 500+ internal users.",
      tags: ["Looker Studio", "Google BigQuery", "Internal APIs"],
      category: "Product",
      image: "/images/projects-fape.png",
      link: "/projects/fape",
    },
    {
      id: 5,
      title: "🏦 Data Migration",
      description: "Directed data migration from on-premise to Azure for one of Peru's largest banks — impacting 600+ users and 1,000+ automated processes. Also led the digital distribution of $100MM in pandemic aid.",
      tags: ["Azure Data Factory", "SQL", "Power BI"],
      category: "Data",
      image: "/images/projects-yape.png",
      link: "/projects/yape-cloud-migration",
    },
  ]

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex justify-between items-center border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl">✍️</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center rounded-md ${getCategoryColor(project.category)} backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-white shadow-sm`}>
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">{project.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#2E8B57] hover:text-[#2E8B57]/80 text-sm font-medium transition-colors"
                >
                  View Project
                  <ArrowRight
                    className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-0.5' : ''}`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <a href="#contact" className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-down h-8 w-8 text-gray-400">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 