"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RvkProject() {
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
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Project Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RvK – Pokémon Card Quoting App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A smarter way to sell your cards locally — without calculators, spreadsheets, or currency confusion.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                React Native
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                Expo
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20">
                React Navigation
              </Badge>
            </div>
          </div>

          {/* Project Sections */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Vision Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Vision</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Most apps built for collectors assume you're in the U.S., pricing in dollars, and listing one card at a time. But in Latin America, it's different — and much more manual.
                </p>
                <p>
                  In Peru, everyday collectors often resell cards locally, but to do so they must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check USD prices on sites like TCGPlayer</li>
                  <li>Manually convert prices to local currency (e.g., PEN)</li>
                  <li>Adjust prices using urgency-based multipliers (e.g., x3.5, x3, x2.5)</li>
                  <li>Repeat this for every card — with no help from any existing tools</li>
                </ul>
                <p className="font-semibold">
                  There's no app made for this process. <span className="text-[#2E8B57]">RvK changes that.</span>
                </p>
              </div>
            </section>

            {/* What RvK Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚙️ What RvK Does</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Designed for collectors who resell cards in Latin America, <span className="font-semibold">RvK simplifies the quoting process</span> by combining price lookup, currency conversion, and local multiplier logic — all in a single mobile experience.
                </p>
                <p>
                  You can quote <span className="font-semibold">1 to 9 cards at a time</span>, using real USD prices and your preferred conversion rate (e.g., x3.2).
                </p>
                <p className="text-sm italic">
                  (Future: AI-powered camera recognition will make this even faster — scan, detect, and quote in seconds.)
                </p>
              </div>
            </section>

            {/* What I Built Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧰 What I Built</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">🔍 Fast Card Search</h3>
                    <p className="text-gray-600">
                      Type a name, get the TCGPlayer market price, and move on — no need to copy-paste across tabs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">🧮 Smart Quoting</h3>
                    <p className="text-gray-600">
                      Choose your own multiplier (x3.5, x2.8, etc.) and instantly convert the price to your local currency.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">💸 1–9 Card Batch Quoting</h3>
                    <p className="text-gray-600">
                      You can price multiple cards in one go — no need to do it manually, card by card.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">💱 Currency-Aware Logic</h3>
                    <p className="text-gray-600">
                      Built-in conversion handles USD → PEN (or any other LATAM currency). You just pick the rate — the app does the math.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white md:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">📱 Mobile-First UX</h3>
                    <p className="text-gray-600">
                      Stack navigation. No login screens. No distractions. Just search, quote, and go.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* The Stack Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 The Stack</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-gray-600">
                      {`RvK App Stack/
├── React Native (Expo)
├── TypeScript
├── React Navigation
└── Expo Go for fast mobile testing`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </section>

            {/* Outcome Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Outcome</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Working prototype used by collectors in Peru</li>
                    <li>• USD-to-PEN quoting flow fully functional</li>
                    <li>• Quoting flow for 1 to 9 cards significantly reduces time spent</li>
                    <li>• Foundation ready for future AI-powered recognition</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* What I Learned Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 What I Learned</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  This wasn't about building a Pokémon app — it was about solving a <span className="font-semibold">localized market problem</span> that global platforms overlook.
                </p>
                <p>I learned to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Design for real collector workflows</li>
                  <li>Replace manual friction with fast, contextual logic</li>
                  <li>Build for people who use cards as income — not just as collectibles</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 