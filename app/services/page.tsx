import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Palette,
  Search,
  BarChart3,
  Wrench,
  Cloud,
} from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites web modernes et performants avec les dernières technologies",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimisé"],
    price: "À partir de 2 500€",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Applications natives et cross-platform pour iOS et Android",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deploy"],
    price: "À partir de 5 000€",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Plateformes de vente en ligne optimisées pour la conversion",
    features: ["Shopify", "WooCommerce", "Paiements sécurisés", "Gestion stocks"],
    price: "À partir de 3 500€",
  },
  {
    icon: Database,
    title: "Solutions Backend",
    description: "APIs robustes et bases de données scalables",
    features: ["Node.js", "PostgreSQL", "MongoDB", "API REST/GraphQL"],
    price: "À partir de 2 000€",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Déploiement et infrastructure cloud optimisés",
    features: ["AWS", "Vercel", "Docker", "CI/CD Pipeline"],
    price: "À partir de 1 500€",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Support technique et maintenance continue de vos applications",
    features: ["Support 24/7", "Mises à jour", "Monitoring", "Backup"],
    price: "À partir de 500€/mois",
  },
]

const additionalServices = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces utilisateur modernes et intuitives",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Optimisation pour les moteurs de recherche et stratégies digitales",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Tableaux de bord et analyses de performance détaillées",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Audits de sécurité et mise en place de bonnes pratiques",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Nos <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Des solutions complètes pour tous vos besoins digitaux. De la conception au déploiement, nous vous
            accompagnons à chaque étape.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services principaux</h2>
            <p className="text-xl text-muted-foreground">Nos expertises clés pour votre transformation digitale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-lg font-semibold text-primary mb-3">{service.price}</div>
                      <Button className="w-full">Demander un devis</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services complémentaires</h2>
            <p className="text-xl text-muted-foreground">
              Des services additionnels pour optimiser votre présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre processus</h2>
            <p className="text-xl text-muted-foreground">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyse</h3>
              <p className="text-muted-foreground text-sm">Étude approfondie de vos besoins et objectifs business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Conception</h3>
              <p className="text-muted-foreground text-sm">Design et architecture technique de votre solution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Développement</h3>
              <p className="text-muted-foreground text-sm">Réalisation avec les meilleures pratiques et technologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Déploiement</h3>
              <p className="text-muted-foreground text-sm">Mise en ligne et accompagnement pour la prise en main</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Demander un devis gratuit
          </Button>
        </div>
      </section>
    </div>
  )
}
