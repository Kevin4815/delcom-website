import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            À propos de <span className="text-gradient">DEL'COM</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Depuis notre création, nous accompagnons les entreprises dans leur transformation digitale avec passion et
            expertise. Notre mission est de créer des solutions technologiques innovantes qui propulsent votre business
            vers l'avenir.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground">Les principes qui guident chacune de nos actions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans chaque projet, en délivrant des solutions de qualité supérieure.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Nous nous engageons à respecter nos délais et à maintenir la plus haute qualité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre équipe</h2>
            <p className="text-xl text-muted-foreground">Des experts passionnés au service de votre réussite</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alexandre Martin</h3>
                <Badge variant="secondary" className="mb-3">
                  CEO & Fondateur
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sophie Dubois</h3>
                <Badge variant="secondary" className="mb-3">
                  CTO
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thomas Leroy</h3>
                <Badge variant="secondary" className="mb-3">
                  Lead Developer
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
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
      </section>
    </div>
  )
}
