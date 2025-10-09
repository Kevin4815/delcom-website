"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type Project = {
  title: string
  category: "Sites Web" | "Applications" | "Logiciel"
  image: string | null
  url?: string | null
  summary?: string
}

const ALL_FILTERS = ["Tous", "Sites Web", "Applications", "Logiciel"] as const

const PROJECTS: Project[] = [
  {
    title: "N2A Formations",
    category: "Sites Web",
    image: "/n2a-formations.png",
    url: "https://www.n2aformations.fr",
    summary: "Site web moderne pour un centre de formation, design épuré et navigation intuitive.",
  },
  {
    title: "N2A Contrôles",
    category: "Sites Web",
    image: "/n2a-controles.png",
    url: "https://expertises.n2acontroles.fr",
    summary: "Landing page claire et performante pour une entreprise d'expertises et de contrôles.",
  },
  {
    title: "N2A Expertises",
    category: "Sites Web",
    image: "/n2a-expertises.png",
    url: "https://www.n2aexpertises.fr/",
    summary: "Site web dédié au diagnostic immobilier",
  },
  {
    title: "Groupe N2A",
    category: "Sites Web",
    image: "/groupe-n2a.png",
    url: "https://expertises.groupe-n2a.fr/",
    summary: "Site du groupe N2A, présentation de l'identité du groupe, de ses activités et de ses engagements",
  },
  {
    title: "Immo et co",
    category: "Sites Web",
    image: "/immo-et-co.png",
    url: "https://immoetco.com/",
    summary: "Site web moderne pour un centre de formation, design épuré et navigation intuitive.",
  },
  {
    title: "Nouveau projet bientôt",
    category: "Applications",
    image: null,
    url: null,
    summary: "Nous travaillons actuellement sur quelque chose d'extraordinaire…",
  },
]

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof ALL_FILTERS)[number]>("Tous")

  const filtered = useMemo(() => {
    if (active === "Tous") return PROJECTS
    return PROJECTS.filter((p) => p.category === active)
  }, [active])

  return (
    <section id="projets" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">04</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">Nos réalisations</h3>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-4">
          {ALL_FILTERS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={[
                "px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border transition-colors",
                active === label
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-foreground/80 border-border hover:bg-muted",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {filtered.map((project, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="relative group bg-card shadow-sm hover:shadow-md transition-shadow rounded-xl h-[380px] sm:h-[420px]">
                  {/* Media */}
                  <div className="aspect-video relative bg-muted/40 rounded-t-xl overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <Settings className="h-8 w-8 sm:h-10 sm:w-10 text-primary animate-spin" />
                        <span className="text-xs sm:text-sm text-muted-foreground">En construction…</span>
                      </div>
                    )}

                    {/* Overlay au hover (si URL dispo) */}
                    {project.url && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 sm:px-5 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-primary hover:text-white transition-colors text-sm"
                        >
                          Voir le site
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <CardContent className="p-4 sm:p-5">
                    <div className="text-xs font-semibold text-primary mb-1">{project.category}</div>
                    <h4 className="text-base sm:text-lg font-bold mb-2">{project.title}</h4>
                    {project.summary && (
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
