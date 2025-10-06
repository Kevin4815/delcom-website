"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      router.push(`#${sectionId}`)   // met juste le hash → scroll auto
    } else {
      router.push(`/#${sectionId}`)  // change de page + scroll auto
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Image
            src="/delcom-logo.png"
            alt="DELCOM"
            width={120}
            height={120}
            className="cursor-pointer rounded-full object-cover"
            onClick={() => scrollToSection("hero")}
          />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("offers")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nos Offres
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => router.push('/diagnostiqueur')}
            className="bg-gray-950 hover:opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
          >
            Je suis diagnostiqueur
          </Button>
        </div>
      </div>
    </nav>
  )
}
