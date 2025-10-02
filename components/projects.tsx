"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"


type Project = {
  title: string;
  category: "Sites Web" | "Applications" | "Design";
  image: string | null;
  url?: string | null;
  summary?: string;
};

const ALL_FILTERS = ["Tous", "Sites Web", "Applications", "Design"] as const;

const PROJECTS: Project[] = [
  {
    title: "N2A Formations",
    category: "Sites Web",
    image: "/n2a-formations.png",
    url: "https://www.n2aformations.fr",
    summary:
      "Site vitrine moderne pour un centre de formation, design épuré et navigation intuitive.",
  },
  {
    title: "N2A Contrôles",
    category: "Sites Web",
    image: "/n2a-controles.png",
    url: "https://expertises.n2acontroles.fr",
    summary:
      "Landing page claire et performante pour une entreprise d’expertises et de contrôles.",
  },
  {
    title: "N2A Expertises",
    category: "Sites Web",
    image: "/n2a-expertises.png",
    url: "https://www.n2aexpertises.fr/ ",
    summary:
      "Site vitrine moderne pour un centre de formation, design épuré et navigation intuitive.",
  },
  {
    title: "Groupe N2A",
    category: "Sites Web",
    image: "/groupe-n2a.png",
    url: "https://expertises.groupe-n2a.fr/",
    summary:
      "Site vitrine moderne pour un centre de formation, design épuré et navigation intuitive.",
  },
  {
    title: "Nouveau projet bientôt",
    category: "Applications",
    image: null,
    url: null,
    summary: "Nous travaillons actuellement sur quelque chose d’extraordinaire…",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof ALL_FILTERS)[number]>("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">04</span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-8">Nos réalisations</h3>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez quelques-uns de nos projets récents
        </p>
      </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {ALL_FILTERS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={[
                "px-4 py-2 rounded-full text-sm border transition-colors",
                active === label
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-foreground/80 border-border hover:bg-muted",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Cards */}
        <Carousel plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
          {filtered.map((project, index) => (

            <CarouselItem className="basis-1/3">
              <Card
              key={index}
              className="relative group bg-card shadow-sm hover:shadow-md transition-shadow rounded-xl"
            >
              {/* Media */}
              <div className="aspect-video relative bg-muted/40">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  // Animation “en construction”
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <Settings className="h-10 w-10 text-primary animate-spin" />
                    <span className="text-sm text-muted-foreground">En construction…</span>
                  </div>
                )}

                {/* Overlay au hover (si URL dispo) */}
                {project.url && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-primary hover:text-white transition-colors"
                    >
                      Voir le site
                    </a>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <CardContent className="p-5">
                <div className="text-xs font-semibold text-primary mb-1">{project.category}</div>
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                {project.summary && (
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                )}
              </CardContent>
            </Card>
            </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    </section>
  );
}