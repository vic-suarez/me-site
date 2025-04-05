import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: "Victor Suárez - Data & Analytics Expert",
  description: "Portfolio website of Victor Suárez, a Data & Analytics Expert with 13+ years of experience.",
  icons: {
    icon: '/logo-initials.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans`}>{children}</body>
    </html>
  )
} 