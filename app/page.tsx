"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, MapPin, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features an interactive skill carousel, smooth animations, and a clean, minimalist design.",
      image: "/projects-me-site.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
      link: "/projects/portfolio-site"
    },
    {
      title: "Yape – BCP Cloud Data Migration",
      description: "A large-scale migration that reshaped how 500+ users across Yape handled sensitive data. I led the transition from BCP's on-prem legacy to Azure, driving both adoption and compliance through strategic planning and cross-functional leadership.",
      image: "/projects-yape.png",
      tags: ["Azure", "Data Migration", "Product Management", "Change Management"],
      link: "/projects/yape-cloud-migration"
    }
  ]

  // Function to handle smooth scrolling and update active section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      })
      setActiveSection(id)
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // offset for better section detection

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center">
              <Image
                src="/logo-initials.png"
                alt="VS Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </a>
            <div className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, "home")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors ${activeSection === "home" ? "font-bold text-[#2E8B57]" : ""}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, "about")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors ${activeSection === "about" ? "font-bold text-[#2E8B57]" : ""}`}
              >
                About Me
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, "projects")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors ${activeSection === "projects" ? "font-bold text-[#2E8B57]" : ""}`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, "contact")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors ${activeSection === "contact" ? "font-bold text-[#2E8B57]" : ""}`}
              >
                Contact
              </a>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-600 hover:text-[#2E8B57] transition-colors px-3 py-2 rounded-md"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, "home")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors px-2 py-2 rounded-md ${activeSection === "home" ? "font-bold text-[#2E8B57] bg-[#2E8B57]/5" : ""}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, "about")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors px-2 py-2 rounded-md ${activeSection === "about" ? "font-bold text-[#2E8B57] bg-[#2E8B57]/5" : ""}`}
              >
                About Me
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, "projects")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors px-2 py-2 rounded-md ${activeSection === "projects" ? "font-bold text-[#2E8B57] bg-[#2E8B57]/5" : ""}`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, "contact")} 
                className={`text-gray-600 hover:text-[#2E8B57] transition-colors px-2 py-2 rounded-md ${activeSection === "contact" ? "font-bold text-[#2E8B57] bg-[#2E8B57]/5" : ""}`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-[#2E8B57]/10 rounded-full px-3 py-1 text-sm font-medium text-[#2E8B57] mb-2">
                👋 Hi, I'm Vic
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I simplify complexity.
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                With +13 years in data, digital products, and systems across fintech, retail, telecom, and consulting, I help teams refine how things run — using data, automation, and design thinking to make things feel less heavy, and blending strategy with empathy.
              </p>
              <p className="text-gray-600">
                I'm driven by clarity, clean systems, and real-world impact.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/profile-vic.png"
                    alt="Victor Suárez"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">👨‍💻</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
            </div>
            <a
              href="https://www.linkedin.com/in/victorsuareza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#2E8B57] hover:text-[#2E8B57]/80 transition-colors"
            >
              View LinkedIn
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-600">My Story</h3>
              <p className="text-gray-600">
                I'm Vic — a Systems Engineer turned Data & Product Leader.
              </p>
              <p className="text-gray-600">
                I've worked on everything from distributing over $100MM in pandemic emergency aid, to leading delivery platforms and analytics teams.  
                I care about clean systems, real collaboration, and making hard things feel a little lighter.
              </p>
              <p className="text-gray-600">
                Outside of work, I'm a dad, a builder, and a curious tech human.
              </p>
              <p className="text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Cambridge MA, US</span>
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-600 mb-6">Where I've Worked</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/fape-logo.png"
                      alt="Farmacias Peruanas Logo"
                      width={32}
                      height={32}
                      className="object-contain mt-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">2024 – 2024</p>
                    <p className="text-sm">
                      <span className="font-bold text-gray-900">Farmacias Peruanas (InRetail)</span>
                      <span className="text-gray-500"> · Lima, Peru (Remote)</span>
                    </p>
                    <p className="text-sm text-gray-600">Digital Product Owner</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/yape-logo.png"
                      alt="Yape Logo"
                      width={32}
                      height={32}
                      className="object-contain mt-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">2019 – 2023</p>
                    <p className="text-sm">
                      <span className="font-bold text-gray-900">Yape (Banco de Crédito del Perú)</span>
                      <span className="text-gray-500"> · Lima, Peru</span>
                    </p>
                    <p className="text-sm text-gray-600">Data Product Manager</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/bcp-logo.png"
                      alt="Banco de Crédito del Perú Logo"
                      width={32}
                      height={32}
                      className="object-contain mt-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">2017 – 2019</p>
                    <p className="text-sm">
                      <span className="font-bold text-gray-900">Banco de Crédito del Perú</span>
                      <span className="text-gray-500"> · Lima, Peru</span>
                    </p>
                    <p className="text-sm text-gray-600">Deputy Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-medium text-gray-600 mb-10">My Skillsets</h3>
            <SkillCarousel />
          </div>

          <div className="flex justify-center mt-20">
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">✍️</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Personal Portfolio */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Personal Portfolio</h3>
                <p className="text-gray-600 mb-3">
                A personal website designed to showcase my work and story through clean design, smart interactions, and strong UX. Built to reflect who I am, what I've done, and what I can build next.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Radix UI</Badge>
                </div>
                <a
                  href="/projects/portfolio-site"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full aspect-[4/3] mt-2 overflow-hidden">
                <Image
                  src="/projects-me-site.png"
                  alt="Personal Portfolio"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project 2 - Currency Snap */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">💱 Currency Snap</h3>
                <p className="text-gray-600 mb-3">
                  Real-time mobile app using computer vision to detect Japanese price tags and convert them to local currencies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Google Cloud Vision API</Badge>
                  <Badge variant="outline">ExchangeRate API</Badge>
                </div>
                <a
                  href="/projects/currency-snap"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full aspect-[4/3] mt-2 overflow-hidden">
                <Image
                  src="/projects-currency-snap.png"
                  alt="Currency Snap App"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project 3 - Farmacias Peruanas */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">🚚 Delivery Platform – Farmacias Peruanas</h3>
                <p className="text-gray-600 mb-3">
                  Led the creation of a nationwide delivery management platform, from last-mile logistics to a web-based tracking system for 500+ internal users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Looker Studio</Badge>
                  <Badge variant="outline">Google BigQuery</Badge>
                  <Badge variant="outline">Internal APIs</Badge>
                </div>
                <a
                  href="/projects/fape"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full aspect-[4/3] mt-2 overflow-hidden">
                <Image
                  src="/projects-fape.png"
                  alt="Analytics Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project 4 - Yape */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">🏦 Yape & BCP Data Migration</h3>
                <p className="text-gray-600 mb-3">
                  Directed data migration from on-premise to Azure for one of Peru's largest banks — impacting 600+ users and 1,000+ automated processes. Also led the digital distribution of $100MM in pandemic aid.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Azure Data Factory</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">Power BI</Badge>
                </div>
                <a
                  href="/projects/yape-cloud-migration"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full aspect-[4/3] mt-2 overflow-hidden">
                <Image
                  src="/projects-yape.png"
                  alt="Data Migration Project"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">🤙</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's connect!</h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mt-6">
            {/* Left side: Text + Icons */}
            <div className="flex flex-col space-y-4">
              <p className="text-gray-600">
                Looking to collaborate, solve a problem, or chat data + tech? reach out.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:suarez.alpaca@gmail.com" 
                  className="text-gray-600 hover:text-[#2E8B57] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/victorsuareza" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2E8B57] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/vic-suarez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2E8B57] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right side: Image squares */}
            <div className="flex flex-row gap-4 mt-4 sm:mt-0">
              <div className="relative w-[230px] aspect-square">
                <img
                  src="/contact-pic1.png"
                  alt="Family"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
                <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">🫰 family</div>
              </div>
              <div className="relative w-[230px] aspect-square">
                <img
                  src="/contact-pic2.png"
                  alt="Robin"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
                <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">🐶 robin</div>
              </div>
            </div>
          </div>

          {/* Add spacing below section */}
          <div className="h-32 sm:h-40" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-400 text-center py-6">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Victor Suárez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

  const skills = [
    {
      emoji: "🧭",
      title: "Project Management",
      description: "Leading multidisciplinary teams with clarity, agile rituals, and human-first communication.",
      tools: ["monday.png", "azure-devops.png", "notion.png", "trello.png"]
    },
    {
      emoji: "🧠",
      title: "Product Ownership",
      description: "Driving product strategy from discovery to delivery — always centered on user value and feasibility.",
      tools: ["figma.png", "productboard.png", "jira.png", "miro.png"]
    },
    {
      emoji: "🤝",
      title: "Cross-functional Collab",
      description: "Working across design, tech, business, and ops to align goals and create shared momentum.",
      tools: ["slack.png", "notion.png", "confluence.png", "google-meet.png"]
    },
    {
      emoji: "📊",
      title: "Data Analysis",
      description: "Turning complex datasets into decisions using SQL, Python, and visual tools like Looker Studio.",
      tools: ["bigquery.png", "looker-studio.png", "python.png", "sheets.png"]
    },
    {
      emoji: "🚀",
      title: "Tech Empowerment",
      description: "Coaching teams to adopt better tools, simplify systems, and build tech confidence.",
      tools: ["loom.png", "zapier.png", "google-workspace.png", "github.png"]
    },
    {
      emoji: "🤖",
      title: "Process Automation",
      description: "Simplifying workflows with scripts, APIs, and low-code tools to save time and reduce friction.",
      tools: ["make.png", "zapier.png", "python.png", "apps-script.png"]
    },
    {
      emoji: "🔗",
      title: "System Integration",
      description: "Connecting platforms across departments using internal APIs, secure syncs, and solid architecture.",
      tools: ["postman.png", "rest-api.png", "firebase.png", "git.png"]
    },
    {
      emoji: "☁️",
      title: "Cloud Platforms",
      description: "Deploying and migrating workloads across Azure and GCP with scalability and data security in mind.",
      tools: ["azure.png", "gcp.png", "terraform.png"]
    },
    {
      emoji: "❤️‍🩹",
      title: "Human-Centered Design",
      description: "Aligning data, strategy, and empathy to create things people actually use and understand.",
      tools: ["figma.png", "google-forms.png", "userzoom.png", "miro.png"]
    }
  ]

  // Calculate slides per view based on screen width
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3 // Default for SSR
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView())

  // Update slides per view on resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse drag handlers for desktop horizontal scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * -1 // Scroll multiplier
    containerRef.current.scrollLeft = scrollLeft + walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(skills.length / slidesPerView)

  // Handle scroll snap and update active slide
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollPosition = container.scrollLeft
    const slideWidth = container.offsetWidth / slidesPerView
    const newActiveSlide = Math.round(scrollPosition / slideWidth)
    setActiveSlide(Math.floor(newActiveSlide / slidesPerView))
  }

  // Handle dot click
  const handleDotClick = (pageIndex: number) => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth / slidesPerView
      containerRef.current.scrollTo({
        left: pageIndex * slideWidth * slidesPerView,
        behavior: 'smooth'
      })
      setActiveSlide(pageIndex)
    }
  }

  const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
    // Helper function to format tool name for tooltip
    const formatToolName = (filename: string) => {
      return filename
        .replace(/\.(png|svg)$/, '') // Remove file extension
        .split(/[-_]/) // Split on hyphens and underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(' ') // Join with spaces
        .replace(/Api/g, 'API') // Fix common acronyms
        .replace(/Gcp/g, 'GCP')
        .replace(/Sql/g, 'SQL')
    }

    return (
      <Card className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{skill.emoji}</span>
            <h4 className="text-xl font-semibold text-gray-900">{skill.title}</h4>
          </div>
          <p className="text-gray-600 flex-grow">{skill.description}</p>
          <div className="flex items-center flex-wrap mt-4">
            {skill.tools.map((tool, i) => (
              <img
                key={i}
                src={`/skillset-icons/${tool}`}
                alt={`${formatToolName(tool)} logo`}
                title={formatToolName(tool)}
                className="h-6 w-6 mr-2 mb-2 object-contain"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="relative max-w-[1400px] mx-auto">
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className={`
          flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6
          ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
          scroll-smooth
        `}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="flex gap-6 flex-nowrap">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-3rem)] lg:w-[calc(33.333vw-3rem)] max-w-[400px] flex-shrink-0 snap-start"
              style={{
                scrollSnapAlign: 'start',
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeSlide === i ? "bg-[#2E8B57]" : "bg-gray-300"
            } hover:bg-[#2E8B57]/70 cursor-pointer`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 