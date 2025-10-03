import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Package, CheckCircle, Briefcase, Gem, Gift } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "react-day-picker"

export default function DiagnostiqueurPage() {
  return (
    
    <div className="min-h-screen py-20">
            <Navbar />
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Offre <span className="text-gradient">diagnostiqueur</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Profitez de nos packs Starter, Business et Ultime pour booster votre présence en ligne. 
            En tant que diagnostiqueur immobilier, bénéficiez d’avantages exclusifs avec des réductions sur vos formations obligatoires, 
            adaptées selon le pack choisi.
          </p>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-20 bg-secondary" id="offers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos packs</h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à vos besoins et à votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Pack Starter */}
            <Card className="hover-lift border-primary/20 shadow-md hover:shadow-xl transition-all h-full">
              <CardContent className="p-4 text-center h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Package className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Pack Starter</h3>
                </div>

                <ul className="space-y-3 text-left mt-6 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Création de site vitrine
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Maintenance 3 mois
                  </li>
                </ul>

                {/* Avantage formation */}
                <div className="text-primary font-medium mb-4">
                  -50% sur la formation continue
                </div>

                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">180&nbsp;€/mois</div>
                  {/* <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300">
                    Choisir ce pack
                  </Button> */}
                </div>
              </CardContent>
            </Card>

            {/* Pack Business */}
            <Card className="hover-lift border-primary/20 shadow-md hover:shadow-xl transition-all h-full">
              <CardContent className="p-4 text-center h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Briefcase className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Pack Business</h3>
                </div>

                <ul className="space-y-3 text-left mt-6 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Création de site professionnel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Gestion de contenu (blog, SEO, newsletter)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Gestion des réseaux sociaux
                  </li>
                </ul>

                {/* Avantage formation */}
                <div className="text-primary font-medium mb-4">
                  -75% sur la formation continue
                </div>

                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">230&nbsp;€/mois</div>
                  {/* <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300">
                    Choisir ce pack
                  </Button> */}
                </div>
              </CardContent>
            </Card>

            {/* Pack Ultime */}
            <Card className="hover-lift border-primary/20 shadow-md hover:shadow-xl transition-all h-full">
              <CardContent className="p-4 text-center h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Gem className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Pack Ultime</h3>
                </div>

                <ul className="space-y-3 text-left mt-6 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Création de site complet
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Gestion des réseaux sociaux
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Gestion de campagnes publicitaires
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Gestion de contenu avancé (blog, SEO, newsletter)
                  </li>
                </ul>

                {/* Avantage formation */}
                <div className="text-primary font-medium mt-4 mb-4 flex items-center justify-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Formation continue offerte
                </div>
                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">260&nbsp;€/mois</div>
                  {/* <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300">
                    Choisir ce pack
                  </Button> */}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
      {/* Company Stats */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DEL'COM en chiffres</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support technique</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
