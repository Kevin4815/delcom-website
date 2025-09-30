import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dubois",
    position: "CEO",
    company: "TechStart",
    avatar: "/professional-woman-ceo.png",
    rating: 5,
    text: "DEL'COM a transformé notre vision en une plateforme e-commerce exceptionnelle. Leur expertise technique et leur approche collaborative ont dépassé toutes nos attentes. Le projet a été livré dans les délais avec une qualité irréprochable.",
    project: "Plateforme E-commerce",
    category: "E-commerce",
  },
  {
    name: "Thomas Martin",
    position: "CTO",
    company: "InnovateLab",
    avatar: "/professional-man-cto.jpg",
    rating: 5,
    text: "L'équipe DEL'COM a développé notre application mobile avec un niveau de professionnalisme remarquable. Leur maîtrise des technologies modernes et leur capacité à résoudre les défis complexes nous ont impressionnés.",
    project: "Application Mobile",
    category: "Mobile",
  },
  {
    name: "Sophie Leroy",
    position: "Directrice Marketing",
    company: "GrowthCorp",
    avatar: "/professional-woman-marketing-director.jpg",
    rating: 5,
    text: "Notre site vitrine créé par DEL'COM a considérablement amélioré notre présence en ligne. Le design est moderne, l'expérience utilisateur est fluide et les performances sont excellentes. Nous recommandons vivement leurs services.",
    project: "Site Vitrine",
    category: "Web",
  },
  {
    name: "Alexandre Petit",
    position: "Fondateur",
    company: "DataFlow",
    avatar: "/professional-man-founder.png",
    rating: 5,
    text: "DEL'COM a développé notre solution SaaS avec une architecture robuste et scalable. Leur expertise en développement backend et leur attention aux détails ont été cruciales pour le succès de notre produit.",
    project: "Solution SaaS",
    category: "SaaS",
  },
  {
    name: "Camille Rousseau",
    position: "Responsable IT",
    company: "RetailPlus",
    avatar: "/professional-woman-it-manager.jpg",
    rating: 5,
    text: "Le système CRM développé par DEL'COM a révolutionné notre gestion client. L'interface est intuitive, les fonctionnalités sont complètes et l'intégration avec nos outils existants s'est faite sans problème.",
    project: "Système CRM",
    category: "Web App",
  },
  {
    name: "Julien Moreau",
    position: "Directeur Général",
    company: "ConnectBiz",
    avatar: "/professional-man-general-director.png",
    rating: 5,
    text: "Notre marketplace B2B développée par DEL'COM dépasse toutes nos attentes. La plateforme est performante, sécurisée et offre une expérience utilisateur exceptionnelle. Un partenariat de confiance.",
    project: "Marketplace B2B",
    category: "Marketplace",
  },
]

const stats = [
  { value: "4.9/5", label: "Note moyenne" },
  { value: "100%", label: "Projets livrés à temps" },
  { value: "95%", label: "Clients qui recommandent" },
  { value: "24h", label: "Temps de réponse moyen" },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Témoignages <span className="text-gradient">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Découvrez ce que nos clients pensent de notre travail. Leur satisfaction est notre plus belle récompense.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.position} chez {testimonial.company}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      Projet: <span className="font-medium">{testimonial.project}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-16 w-16 mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-balance">
            "DEL'COM ne se contente pas de développer des applications, ils créent des solutions qui transforment
            réellement les entreprises."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/ceo-portrait.png" alt="CEO Portrait" fill className="object-cover" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Laurent Dubois</div>
              <div className="opacity-75">CEO, TechVision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nos clients nous font confiance</h2>
            <p className="text-xl text-muted-foreground">Les raisons de leur satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Écoute active</h3>
                <p className="text-muted-foreground text-sm">
                  Nous prenons le temps de comprendre vos besoins spécifiques et vos objectifs business.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expertise technique</h3>
                <p className="text-muted-foreground text-sm">
                  Notre équipe maîtrise les dernières technologies et meilleures pratiques du développement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Suivi personnalisé</h3>
                <p className="text-muted-foreground text-sm">
                  Un accompagnement sur mesure tout au long du projet et après la livraison.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez nos clients satisfaits</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Faites confiance à DEL'COM pour votre prochain projet digital et découvrez pourquoi nos clients nous
            recommandent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
              Demander un devis
            </button>
            <button className="border border-border hover:bg-accent px-8 py-3 rounded-lg font-medium transition-colors">
              Voir nos projets
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
