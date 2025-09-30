import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce TechStore",
    description:
      "Plateforme e-commerce complète pour la vente d'équipements technologiques avec gestion des stocks, paiements sécurisés et interface d'administration.",
    image: "/modern-ecommerce-website-tech-store.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "E-commerce",
    duration: "3 mois",
    team: "4 développeurs",
    year: "2024",
    features: ["Catalogue produits", "Panier intelligent", "Paiements sécurisés", "Dashboard admin"],
  },
  {
    title: "Application Mobile FitTracker",
    description:
      "Application mobile de suivi fitness avec synchronisation cloud, statistiques détaillées et programmes d'entraînement personnalisés.",
    image: "/fitness-app-interface.png",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    category: "Mobile",
    duration: "4 mois",
    team: "3 développeurs",
    year: "2024",
    features: ["Suivi activités", "Statistiques", "Programmes personnalisés", "Synchronisation cloud"],
  },
  {
    title: "Plateforme SaaS Analytics",
    description:
      "Solution SaaS complète pour l'analyse de données business avec tableaux de bord interactifs et rapports automatisés.",
    image: "/analytics-dashboard-saas-platform.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    category: "SaaS",
    duration: "6 mois",
    team: "5 développeurs",
    year: "2023",
    features: ["Tableaux de bord", "Rapports automatisés", "API REST", "Multi-tenant"],
  },
  {
    title: "Site Vitrine Restaurant",
    description:
      "Site vitrine moderne pour chaîne de restaurants avec système de réservation en ligne et menu interactif.",
    image: "/restaurant-website-modern-design.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    category: "Vitrine",
    duration: "2 mois",
    team: "2 développeurs",
    year: "2023",
    features: ["Réservations en ligne", "Menu interactif", "Galerie photos", "SEO optimisé"],
  },
  {
    title: "Application Web CRM",
    description: "Système de gestion de la relation client avec automatisation des processus et intégration email.",
    image: "/crm-web-application-interface.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    category: "Web App",
    duration: "5 mois",
    team: "4 développeurs",
    year: "2023",
    features: ["Gestion contacts", "Automatisation", "Intégration email", "Rapports avancés"],
  },
  {
    title: "Marketplace B2B",
    description: "Plateforme marketplace B2B pour la mise en relation entre fournisseurs et acheteurs professionnels.",
    image: "/b2b-marketplace-platform.png",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    category: "Marketplace",
    duration: "8 mois",
    team: "6 développeurs",
    year: "2022",
    features: ["Mise en relation", "Système d'enchères", "Messagerie intégrée", "Paiements sécurisés"],
  },
]

const categories = ["Tous", "E-commerce", "Mobile", "SaaS", "Vitrine", "Web App", "Marketplace"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Nos <span className="text-gradient">Projets</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Découvrez une sélection de nos réalisations les plus marquantes. Chaque projet reflète notre expertise et
            notre engagement envers l'excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button key={category} variant={category === "Tous" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.team}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Fonctionnalités clés</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir le projet
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos réalisations en chiffres</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Votre projet sera le prochain ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de votre vision et découvrir comment nous pouvons la transformer en réalité.
          </p>
          <Button size="lg" className="px-8 py-3">
            Démarrer un projet
          </Button>
        </div>
      </section>
    </div>
  )
}
