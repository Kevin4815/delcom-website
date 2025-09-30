"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail } from "lucide-react"

const faqData = [
  {
    category: "Général",
    questions: [
      {
        question: "Quels types de projets DEL'COM réalise-t-il ?",
        answer:
          "DEL'COM développe une large gamme de solutions digitales : sites web vitrine et e-commerce, applications mobiles iOS et Android, applications web SaaS, systèmes CRM, marketplaces, et bien plus. Nous nous adaptons aux besoins spécifiques de chaque client.",
      },
      {
        question: "Dans quels secteurs d'activité intervenez-vous ?",
        answer:
          "Nous travaillons avec des entreprises de tous secteurs : retail, santé, finance, éducation, industrie, services, startups technologiques. Notre approche agnostique nous permet de nous adapter à tout domaine d'activité.",
      },
      {
        question: "Quelle est votre zone géographique d'intervention ?",
        answer:
          "Basés à Paris, nous intervenons partout en France et à l'international. Nous travaillons aussi bien en présentiel qu'en remote, selon les préférences et contraintes de nos clients.",
      },
    ],
  },
  {
    category: "Services & Tarifs",
    questions: [
      {
        question: "Comment sont calculés vos tarifs ?",
        answer:
          "Nos tarifs sont calculés en fonction de la complexité du projet, des technologies utilisées, du nombre de fonctionnalités et du temps de développement estimé. Nous proposons toujours un devis détaillé et transparent avant le début du projet.",
      },
      {
        question: "Proposez-vous des forfaits ou travaillez-vous en régie ?",
        answer:
          "Nous proposons les deux approches selon vos besoins : forfait pour les projets avec un périmètre bien défini, ou régie pour les projets nécessitant plus de flexibilité. Nous vous conseillons sur la meilleure approche.",
      },
      {
        question: "Incluez-vous la maintenance dans vos prestations ?",
        answer:
          "Oui, nous proposons des contrats de maintenance adaptés à vos besoins : maintenance corrective, évolutive, support technique, mises à jour de sécurité. Ces services peuvent être inclus dès le devis initial.",
      },
      {
        question: "Fournissez-vous l'hébergement et le nom de domaine ?",
        answer:
          "Nous pouvons vous accompagner dans le choix et la mise en place de l'hébergement et du nom de domaine. Nous travaillons avec les meilleurs fournisseurs (AWS, Vercel, OVH) selon vos besoins et budget.",
      },
    ],
  },
  {
    category: "Processus & Délais",
    questions: [
      {
        question: "Quels sont vos délais de réalisation ?",
        answer:
          "Les délais varient selon la complexité : 2-4 semaines pour un site vitrine, 2-3 mois pour un e-commerce, 3-6 mois pour une application mobile ou SaaS. Nous établissons un planning détaillé lors de la phase de cadrage.",
      },
      {
        question: "Comment se déroule un projet avec DEL'COM ?",
        answer:
          "Notre processus comprend 4 étapes : 1) Analyse et cadrage des besoins, 2) Conception et design, 3) Développement avec points d'étape réguliers, 4) Tests, déploiement et formation. Vous êtes impliqué à chaque étape.",
      },
      {
        question: "Puis-je suivre l'avancement de mon projet ?",
        answer:
          "Absolument ! Nous utilisons des outils de gestion de projet collaboratifs et organisons des points d'étape réguliers. Vous avez accès à un environnement de développement pour voir l'évolution en temps réel.",
      },
      {
        question: "Que se passe-t-il si je veux modifier le projet en cours ?",
        answer:
          "Les modifications sont possibles et courantes. Nous évaluons l'impact sur les délais et le budget, puis vous proposons un avenant si nécessaire. Notre approche agile permet une certaine flexibilité.",
      },
    ],
  },
  {
    category: "Technique",
    questions: [
      {
        question: "Quelles technologies utilisez-vous ?",
        answer:
          "Nous utilisons les technologies les plus modernes et adaptées à chaque projet : React/Next.js, Vue.js, React Native, Flutter, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, et bien d'autres selon les besoins.",
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "La sécurité est notre priorité. Nous appliquons les meilleures pratiques : chiffrement des données, authentification sécurisée, audits de sécurité, conformité RGPD, sauvegardes automatiques et hébergement sécurisé.",
      },
      {
        question: "Puis-je récupérer le code source de mon projet ?",
        answer:
          "Bien sûr ! Le code source vous appartient entièrement. Nous vous fournissons l'accès au repository Git avec toute la documentation technique nécessaire pour la maintenance future.",
      },
      {
        question: "Mes applications seront-elles responsive ?",
        answer:
          "Toutes nos réalisations sont responsive et optimisées pour tous les appareils (desktop, tablette, mobile). Nous testons sur différents navigateurs et tailles d'écran pour garantir une expérience optimale.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "Quel support proposez-vous après livraison ?",
        answer:
          "Nous offrons plusieurs niveaux de support : garantie de 3 mois incluse, support technique par email/téléphone, maintenance préventive et corrective, formations utilisateurs, et évolutions fonctionnelles.",
      },
      {
        question: "Combien coûte la maintenance ?",
        answer:
          "Les coûts de maintenance dépendent de la complexité de votre application et du niveau de service souhaité. Comptez généralement entre 10-20% du coût initial de développement par an pour une maintenance complète.",
      },
      {
        question: "Pouvez-vous reprendre un projet existant ?",
        answer:
          "Oui, nous pouvons reprendre et améliorer des projets existants. Nous commençons par un audit technique pour évaluer l'état du code et proposer un plan d'action pour les évolutions ou corrections nécessaires.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const categories = ["Tous", ...faqData.map((cat) => cat.category)]

  const toggleItem = (category: string, index: number) => {
    const itemId = `${category}-${index}`
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const filteredFAQ = faqData
    .filter((category) => {
      if (selectedCategory !== "Tous" && category.category !== selectedCategory) {
        return false
      }

      if (searchTerm) {
        return category.questions.some(
          (q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      return true
    })
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          !searchTerm ||
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Questions <span className="text-gradient">Fréquentes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Trouvez rapidement les réponses à vos questions sur nos services, notre processus de travail et nos tarifs.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Rechercher dans les questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>

              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemId = `${category.category}-${index}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={index} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(category.category, index)}
                        className="w-full text-left p-6 hover:bg-accent transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}

          {filteredFAQ.every((cat) => cat.questions.length === 0) && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucune question trouvée pour "{searchTerm}"</p>
              <Button variant="outline" onClick={() => setSearchTerm("")} className="mt-4">
                Effacer la recherche
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Notre équipe est là pour répondre à toutes vos questions spécifiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Chat en ligne</h3>
                <p className="text-sm text-muted-foreground mb-4">Réponse immédiate pendant les heures ouvrables</p>
                <Button size="sm" className="w-full">
                  Démarrer le chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-sm text-muted-foreground mb-4">Lun-Ven 9h-18h</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  +33 1 23 45 67 89
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Réponse sous 24h</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  contact@delcom.fr
                </Button>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="px-8 py-3">
            Prendre rendez-vous
          </Button>
        </div>
      </section>
    </div>
  )
}
