"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/delcom-logo.png"
              alt="DELCOM"
              width={100}
              height={33}
              className="cursor-pointer w-20 sm:w-24 md:w-28 h-auto"
              onClick={() => scrollToSection("accueil")}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("à-propos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("offres")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Nos Offres
            </button>
            <button
              onClick={() => scrollToSection("projets")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("avis")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              FAQ
            </button>
          </div>

        
          {/* Bouton visible uniquement en desktop/tablette large */}
          <Button
            onClick={() => router.push('/diagnostiqueur')}
            className="hidden lg:inline-flex bg-gray-950 hover:opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
          >
            Je suis diagnostiqueur
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 navbar-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("à-propos")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("offres")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Nos Offres
              </button>
              <button
                onClick={() => scrollToSection("projets")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("avis")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={() => router.push('/diagnostiqueur')}
                className="bg-gray-950 hover:opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
              >
                Je suis diagnostiqueur
              </Button>
                </div>
          </div>
        )}
      </div>
    </nav>
  )
}
