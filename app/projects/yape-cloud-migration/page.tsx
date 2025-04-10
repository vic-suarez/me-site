"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function YapeCloudMigrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Main content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Yape – BCP Cloud Data Migration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A large-scale migration that reshaped how 500+ users across Yape accessed and managed sensitive data.
              I led the transition from legacy on-prem infrastructure to Azure—driving adoption, security, and trust across squads.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Oracle (on-prem)
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Azure Data Factory
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Synapse
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Data Product Management
              </Badge>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Vision</h2>
              <p className="text-gray-600">
                To modernize Yape’s data operations and reduce reliance on legacy infrastructure, I led the strategic migration from
                BCP’s on-premise Oracle environment to Microsoft Azure. This project wasn't just technical—it transformed how 500+
                users accessed, secured, and understood data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚧 The Challenge</h2>
              <p className="text-gray-600">
                Yape had grown fast, with squads building internal tools and logic around unrestricted access to raw data. The
                migration meant:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Transitioning to encrypted and governed usage</li>
                <li>Redesigning pipelines</li>
                <li>Managing change across squads who weren’t eager to shift</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We had to break habits and rebuild trust—while ensuring nothing broke along the way.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">👨‍💼 My Role</h2>
              <p className="text-gray-600">
                As <strong>Data Product Manager</strong>, I owned:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>The migration strategy and roadmap</li>
                <li>Squad leadership: engineers, business specialists, and analytics translators</li>
                <li>Communication with BCP’s governance, cybersecurity, and architecture teams</li>
                <li>Onboarding and adoption across impacted squads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛠️ What We Built</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Technical Delivery</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Built Azure Data Factory pipelines across dev, QA, and prod</li>
                      <li>• Process-to-user-to-table mapping</li>
                      <li>• Automated validation and testing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Governance & Adoption</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Created governance-ready documentation for BCP review</li>
                      <li>• Aligned data access with compliance protocols</li>
                      <li>• Structured onboarding for squads</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 The Stack</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-gray-600">
                      {`Data Migration Stack/
├── Oracle (on-prem)
├── Azure Data Lake
├── Synapse Analytics
├── Azure Data Factory
└── Deployment flow: dev → QA → prod`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ The Outcome</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All datasets migrated with full business continuity</li>
                <li>500+ users onboarded to the new model</li>
                <li>No critical incidents post-migration</li>
                <li>Playbook reused across other BCP squads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 What I Learned</h2>
              <p className="text-gray-600">
                This wasn’t just a data migration—it was an adoption journey. I had to lead with empathy while driving standards.
              </p>
              <p className="text-gray-600 mt-4">
                I wore many hats: PM, data translator, analyst, negotiator, and coach.
              </p>
              <p className="text-gray-600 mt-4">
                The biggest shift? Helping people see that <strong>secure data can still be fast and usable</strong>—when the foundation is done right.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
