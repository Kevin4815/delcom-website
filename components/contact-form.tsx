"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  budget: string; // "<5k" | "5k-10k" | "10k-25k" | ">25k"
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  budget: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const ct = response.headers.get("content-type") || "";
      const payload = ct.includes("application/json") ? await response.json() : await response.text();

      if (!response.ok) {
        setStatus(typeof payload === "string" ? payload : payload?.error || "Erreur serveur");
        return;
        }

      setFormData(initialFormData);
      setStatus("Message envoyé. Merci, nous revenons vers vous rapidement.");
    } catch (error: any) {
      setStatus(error?.message || "Erreur réseau");
      console.error(error);
    } finally {
      setSubmitting(false);
      // Optionnel : masquer le message après 5s
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Infos de contact */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold mb-4">Parlons de votre projet</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Prêt à transformer votre idée en réalité digitale ? Contactez-nous pour discuter de vos besoins et obtenir
            un devis personnalisé.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-muted-foreground">contact@darwinevolutionlogiciel.fr</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Adresse</div>
              <div className="text-muted-foreground">Montauban, France</div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire contact */}
      <Card className="card-purple-border shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nom + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre nom *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-purple-200 focus:border-primary focus:ring-primary"
                  placeholder="Nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-purple-200 focus:border-primary focus:ring-primary"
                  placeholder="nom@exemple.com"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Nous ne spammons jamais, promis !
                </p>
              </div>
            </div>

            {/* Téléphone + Type de projet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-purple-200 focus:border-primary focus:ring-primary"
                  placeholder="06 10 20 30 40"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Optionnel, pour un contact plus rapide
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Type de projet
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(v) => setFormData((s) => ({ ...s, projectType: v }))}
                >
                  <SelectTrigger className="border-purple-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Choisir..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="app-web">Application web</SelectItem>
                    <SelectItem value="app-mobile">Application mobile</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Votre message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border-purple-200 focus:border-primary focus:ring-primary resize-none"
                placeholder="Parlez-nous de votre projet..."
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Plus vous nous en dites, mieux nous pourrons vous aider !
              </p>
            </div>

            {/* Budget estimé (optionnel) */}
            <fieldset className="border rounded-md border-purple-200 p-4">
              <legend className="px-2 text-sm font-medium -ml-1">
                Budget estimé (optionnel)
              </legend>

              <RadioGroup
                value={formData.budget}
                onValueChange={(v) => setFormData((s) => ({ ...s, budget: v }))}
                className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                <label className="flex items-center gap-3 rounded-md border border-purple-200 p-3">
                  <RadioGroupItem value="<5k" id="b1" />
                  <span>&lt; 5k€</span>
                </label>

                <label className="flex items-center gap-3 rounded-md border border-purple-200 p-3">
                  <RadioGroupItem value="5k-10k" id="b2" />
                  <span>5k-10k€</span>
                </label>

                <label className="flex items-center gap-3 rounded-md border border-purple-200 p-3">
                  <RadioGroupItem value="10k-25k" id="b3" />
                  <span>10k-25k€</span>
                </label>

                <label className="flex items-center gap-3 rounded-md border border-purple-200 p-3">
                  <RadioGroupItem value=">25k" id="b4" />
                  <span>&gt; 25k€</span>
                </label>
              </RadioGroup>
            </fieldset>

            {/* Bouton + statut */}
            <div className="space-y-3">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white py-3 rounded-full font-medium transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Envoi..." : "Envoyer mon message"}
              </Button>

              {status && (
                <p className="text-sm text-center text-muted-foreground">
                  {status}
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}