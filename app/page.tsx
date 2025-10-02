'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, Star, Zap, Users, Settings, Gem, CheckCircle, Gift, Briefcase, Package } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import ContactForm from "@/components/contact-form"
import ProjectsSection from "@/components/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export default function HomePage() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center geometric-bg grid-bg overflow-hidden pt-20"
      >
       <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-100 [mask-image:radial-gradient(circle_at_top,white,transparent)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
                DEL'COM
                <br />
                <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
                  AGENCE DIGITALE D'AVANT-GARDE
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed">
                Nous concevons des sites et applications sur-mesure qui allient design visionnaire et ingénierie
                robuste. Votre produit numérique, pensé pour l'avenir.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Commencer un projet
                </Button>
              </div>
            </div>

            <div className="space-y-4 animate-slide-in">
              <Card className="card-purple-border hover-scale">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Performance</h4>
                    <p className="text-muted-foreground">Solutions optimisées pour le futur</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-purple-border hover-scale">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Innovation</h4>
                    <p className="text-muted-foreground">Technologies de pointe</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-purple-border hover-scale">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Expertise</h4>
                    <p className="text-muted-foreground">Équipe dédiée</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">01</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Services</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ingénierie digitale sur-mesure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-purple-border hover-scale">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary">Conception de sites web</h4>
                <p className="text-muted-foreground mb-4 text-purple-600">Sites vitrine & plateformes sur-mesure</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ Un site clair et professionnel qui reflète votre image</li>
                  <li>→ Accessible sur tous les appareils (ordinateur, tablette, mobile)</li>
                  <li>→ Visible sur Google pour attirer de nouveaux clients</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-purple-border hover-scale">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary">Applications mobiles</h4>
                <p className="text-muted-foreground mb-4 text-purple-600">Une expérience fluide sur tous les smartphones</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ Des applications disponibles sur iPhone et Android</li>
                  <li>→ Pensées pour être simples et agréables à utiliser</li>
                  <li>→ Un outil sur-mesure pour développer votre activité</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-purple-border hover-scale">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary">Support & Évolution</h4>
                <p className="text-muted-foreground mb-4 text-purple-600">On reste à vos cotés pour faire grandir votre solution au rythme de votre entreprise</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ Un suivi régulier pour assurer la pérennité de votre solution</li>
                  <li>→ Des améliorations continues selon vos besoins et vos utilisateurs</li>
                  <li>→ Des évolutions pour accompagner la croissance de votre entreprise</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

          
      <section id="offers" className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">02</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Nos Offres</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">160&nbsp;€/mois</div>
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

                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">200&nbsp;€/mois</div>
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

                <div className="mt-6 border-t pt-6">
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="text-2xl font-bold mb-4">230&nbsp;€/mois</div>
                  {/* <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300">
                    Choisir ce pack
                  </Button> */}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="text-6xl md:text-7xl font-bold mb-6">03</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">À propos de DEL'COM</h3>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Une équipe passionnée de développeurs et designers qui transforment vos idées en réalité digitale.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Rencontrer l'équipe
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-purple-100">Sur-mesure</div>
              </div>
              <div className="text-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-purple-100">Clients satisfaits</div>
              </div>
              <div className="text-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2">3 ans</div>
                <div className="text-purple-100">D'expertise</div>
              </div>
              <div className="text-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2">24h</div>
                <div className="text-purple-100">Support réactif</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">05</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Témoignages</h3>
          </div>

          {/* 1 -> 2 colonnes, items centrés */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* wrapper du carousel */}
            <div className="md:col-span-2 justify-self-center w-full max-w-2xl">
            <Carousel plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}>
              <CarouselContent>
                <CarouselItem>
                    <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-10">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        "DEL'COM a transformé notre vision en une plateforme web exceptionnelle. Leur expertise technique et
                        leur approche collaborative ont dépassé nos attentes."
                      </p>
                      <div className="flex items-center">
                        {/* Avatar avec initiales */}
                        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                          N2C
                        </div>
                        <div>
                          <div className="font-semibold">N2A Contrôles</div>
                          <div className="text-sm text-muted-foreground">Expertises techniques</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-10">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        "Une équipe professionnelle qui comprend nos besoins. Notre application a été livrée dans les
                        temps avec une qualité irréprochable."
                      </p>
                      <div className="flex items-center">
                      {/* Avatar avec initiales */}
                      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                        N2A
                      </div>
                      <div>
                        <div className="font-semibold">N2A Formations</div>
                        <div className="text-sm text-muted-foreground">Centre de formation</div>
                      </div>
                    </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-10">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        "Une équipe professionnelle qui comprend nos besoins. Notre application a été livrée dans les
                        temps avec une qualité irréprochable."
                      </p>
                      <div className="flex items-center">
                      {/* Avatar avec initiales */}
                      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                        N2A
                      </div>
                      <div>
                        <div className="font-semibold">N2A Exeprtises</div>
                        <div className="text-sm text-muted-foreground">Entreprise de diagnostics immobilier</div>
                      </div>
                    </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">06</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Questions fréquentes</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Combien de temps prend un projet web ?",
                answer:
                  "La durée varie selon la complexité, généralement entre 4 à 12 semaines pour un site web complet.",
              },
              {
                question: "Proposez-vous la maintenance après livraison ?",
                answer:
                  "Oui, nous offrons des contrats de maintenance pour assurer la sécurité et les mises à jour de votre site.",
              },
              {
                question: "Travaillez-vous avec des petites entreprises ?",
                answer:
                  "Absolument ! Nous accompagnons les entreprises de toutes tailles dans leur transformation digitale.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-subtle border-0 shadow-sm">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4">{faq.question}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding geometric-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
            <p className="text-xl text-muted-foreground">Démarrons votre projet</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
