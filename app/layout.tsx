import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "DEL'COM - Développement Web & Applications",
  description:
    "DEL'COM accompagne les entreprises dans leur transformation digitale avec des solutions web et mobiles sur mesure.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  )
}
