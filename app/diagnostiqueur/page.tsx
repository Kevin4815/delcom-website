import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Package, CheckCircle, Briefcase, Gem, Gift } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "react-day-picker"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PackCard from "@/components/pack-card"

export default function DiagnostiqueurPage() {

  const content = [
    [
      {
        title: "Création de site vitrine", 
        subs: ["Pages : Accueil, contact, à propos, service",]
      },
      {
        title: "Maintenance 3 mois", 
        subs: ["Modification du site (3 par mois)"]
      }
    ],
    [
      {
        title: "Création de site professionnel", 
        subs: ["Pages : Accueil, contact, à propos, + 1 page par service"]
      }, 
      {
        title: "Gestion de contenu", 
        subs: ["Création 1 article et 1 newsletter par mois"]
      }, 
      {
        title: "Gestion des réseaux sociaux", 
        subs: ["Élaboration d'une stratégie de communication, choix des canaux, déploiement des réseaux, création d'un template post"]
      }
    ],
    [
      {
        title: "Création du site complet", 
        subs: ["Pages : Accueil, contact, à propos, 1 page par service, intégration des paiement"]
      }, 
      {
        title: "Gestion des réseaux sociaux", 
        subs: ["Élaboration d'une stratégie de communication, choix des canaux, déploiement des réseaux, création d'un template post, calendrier éditorial sur 3 mois"]},
      {
        title: "Gestion des campagnes publicitaire", 
        subs: ["Étude du marché, identification des cibles, création d'une campagne"]
      }, 
      {
        title: "Gestion de contenu avancé", 
        subs: ["Création 2 articles et 2 newsletters par mois"]
      }
    ],
  ]

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

      <section className="py-20 bg-secondary" id="offres">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos packs</h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à vos besoins et à votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2">
            <PackCard name={"Pack Starter"} items={content[0]} price={1999} isSubscription={false} promoText="-50% sur la formation continue" btnText={"Choisir ce pack"} />
            <PackCard name={"Pack Business"} items={content[1]} price={349} isSubscription={true} promoText="-75% sur la formation continue" btnText={"Choisir ce pack"} />
            <PackCard name={"Pack Ultime"} items={content[2]} price={599} isSubscription={true} promoText="Formation continue offerte" btnText={"Choisir ce pack"} />
           </div>
        </div>
      </section>
    </div>
  )
}
