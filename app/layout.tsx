import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-nunito-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: "Vic Suárez | me",
  description: "Meet Victor Suárez, a Systems Engineer turned Product & Data Leader. 13+ years of impact through automation, analytics, and cross-functional strategy.",
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
      <body className={`${nunitoSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
} 