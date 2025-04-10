"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-gray-600 hover:text-[#2E8B57] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Project Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building My Personal Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A modern, interactive platform showcasing my professional journey while demonstrating technical expertise.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Next.js 14
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Tailwind CSS
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Radix UI
              </Badge>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/vic-suarez/me-site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-[#2E8B57] transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                View Source
              </a>
              <a 
                href="https://vic-suarez.github.io/me-site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-[#2E8B57] transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Sections */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Vision Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Vision</h2>
              <p className="text-gray-600">
                When I decided to create my personal portfolio website, I had a clear vision: to build a modern, 
                interactive platform that would showcase my professional journey while demonstrating my technical expertise. 
                The goal was to create something that was not just visually appealing but also technically sophisticated 
                and user-friendly.
              </p>
            </section>

            {/* Technical Foundation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛠️ The Technical Foundation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Core Technologies</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Next.js 14 for the React framework</li>
                      <li>• TypeScript for type safety</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• Radix UI for components</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Development Phases</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Planning & Design</li>
                      <li>• Implementation</li>
                      <li>• Refinement</li>
                      <li>• Performance Optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Interactive Elements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Interactive Skill Carousel</li>
                      <li>• Smooth scroll navigation</li>
                      <li>• Mobile-friendly layout</li>
                      <li>• Animations and tooltips</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Technical Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SEO optimization</li>
                      <li>• Accessibility compliance</li>
                      <li>• Performance optimization</li>
                      <li>• Responsive design</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Project Structure */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Project Structure</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-gray-600">
                      {`me-site/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── public/             # Static assets
├── lib/                # Utility functions
└── styles/             # Global styles`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </section>

            {/* Future Improvements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔮 Future Improvements</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Add blog section (external on LinkedIn)</li>
                    <li>• Add project pages like this one</li>
                    <li>• Keep refining UX and interactions</li>
                    <li>• Implement dark mode</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 