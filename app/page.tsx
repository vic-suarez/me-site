"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, MapPin, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

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
            <button className="md:hidden text-gray-600 hover:text-[#2E8B57]">Menu</button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-[#2E8B57]/10 rounded-full px-3 py-1 text-sm font-medium text-[#2E8B57] mb-2">
                👋 Hello there!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I'm <span className="text-[#2E8B57]">Victor Suárez</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Data & Analytics Expert with 13+ years of experience, focusing on building systems that make life easier
                for people through AI-powered automation and web tools.
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
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">👨‍💻</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
            </div>
            <a
              href="https://www.linkedin.com/"
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
                With over 13 years of experience in data and analytics, I've developed a passion for building systems
                that make life easier for people. My background spans across various industries, allowing me to bring a
                unique perspective to every project.
              </p>
              <p className="text-gray-600">
                I'm fluent in English and Spanish, with roots in Peru but currently based in the United States. My
                multicultural background helps me approach problems from different angles and create solutions that work
                for diverse audiences.
              </p>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>United States</span>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2E8B57]">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2E8B57]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-[#2E8B57]">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-600 mb-6">Where I've Worked</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-1/3">
                    <h4 className="font-medium text-gray-900">2020 - Present</h4>
                  </div>
                  <div className="w-2/3">
                    <h4 className="font-medium text-gray-900">Data Analytics Lead</h4>
                    <p className="text-gray-600">TechCorp Inc.</p>
                    <p className="text-gray-500 text-sm">San Francisco, CA (Remote)</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/3">
                    <h4 className="font-medium text-gray-900">2017 - 2020</h4>
                  </div>
                  <div className="w-2/3">
                    <h4 className="font-medium text-gray-900">Senior Data Scientist</h4>
                    <p className="text-gray-600">AI Solutions</p>
                    <p className="text-gray-500 text-sm">New York, NY</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/3">
                    <h4 className="font-medium text-gray-900">2014 - 2017</h4>
                  </div>
                  <div className="w-2/3">
                    <h4 className="font-medium text-gray-900">Data Analyst</h4>
                    <p className="text-gray-600">Global Analytics Partners</p>
                    <p className="text-gray-500 text-sm">Miami, FL</p>
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">✍️</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Currency Snap</h3>
                <p className="text-gray-600 mb-4">
                  A React Native mobile app that uses Google Cloud Vision to scan Japanese price tags and instantly
                  convert them to local currencies.
                </p>
                <div className="flex space-x-2 mb-4">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Google Cloud Vision</Badge>
                </div>
                <a href="#" className="flex items-center text-[#2E8B57] hover:text-[#2E8B57]/80 transition-colors">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="/placeholder.svg"
                  alt="Currency Snap App"
                  width={600}
                  height={400}
                  className="object-contain w-full rounded-md"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  An interactive dashboard that transforms complex data sets into intuitive visualizations for business
                  intelligence.
                </p>
                <div className="flex space-x-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">D3.js</Badge>
                </div>
                <a href="#" className="flex items-center text-[#2E8B57] hover:text-[#2E8B57]/80 transition-colors">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="/placeholder.svg"
                  alt="Analytics Dashboard"
                  width={600}
                  height={400}
                  className="object-contain w-full rounded-md"
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
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl">🤙</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <p className="text-xl text-gray-600 mb-8">
                Are you interested in collaborating or want to connect or chat? Feel free to reach out through the
                contact form or connect with me directly via LinkedIn.
              </p>
              <a
                href="mailto:your.email@example.com"
                className="inline-block text-[#2E8B57] hover:text-[#2E8B57]/80 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Contact visual"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Contact visual"
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Victor Suárez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const skills = [
    {
      title: "Data Analysis",
      description:
        "Transforming complex data into actionable insights using advanced statistical methods and visualization techniques.",
      icons: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
    },
    {
      title: "Project Management",
      description:
        "I start by defining the problem, identifying scope, curating requirement documentation, and estimating the project's ROI.",
      icons: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
    },
    {
      title: "Mobile",
      description:
        "The foundation for all my designs, my mobile projects specialize in accessibility while utilizing Material Design and Apple Human Design.",
      icons: ["/placeholder.svg", "/placeholder.svg"],
    },
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className={`bg-white p-6 rounded-lg border border-gray-100 shadow-sm`}>
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{skill.title}</h4>
                <p className="text-gray-600 mb-6">{skill.description}</p>
                <div className="flex space-x-4">
                  {skill.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon}
                      alt={`${skill.title} icon ${i + 1}`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-[#2E8B57]" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 