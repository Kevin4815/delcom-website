"use client";

import { CheckCircle, LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export interface PackCardProps {
  icon: LucideIcon;
  name: string;
  items: { title: string; subs: string[] | null }[];
  price: number | null;
  isSubscription: boolean;
  promoText: string;
  btnText: string;
}

export default function PackCard({
  icon: Icon,
  name,
  items,
  price,
  isSubscription,
  promoText,
  btnText,
}: PackCardProps) {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/") {
      router.push(`#${sectionId}`);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <Card className="hover-lift border-primary/20 shadow-md hover:shadow-xl transition-all h-full">
      <CardContent className="p-4 text-center h-full flex flex-col">
        <div>
          <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Icon className="h-10 w-10 text-primary" aria-hidden />
          </div>
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>

        <ul className="space-y-1 text-left mt-4 flex-1">
          {items.map((item, index) => {
            const hasSubs = Array.isArray(item.subs) && item.subs.length > 0;

            return (
              <li key={`li-${index}`} className="flex items-start">
                {hasSubs ? (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="text-base px-2 py-0 font-normal hover:no-underline">
                        <div className="flex items-center gap-4">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          {item.title}
                        </div>
                      </AccordionTrigger>

                      <div className="mb-4">
                        {item.subs!.map((v, i) => (
                          <AccordionContent
                            key={`sub-${index}-${i}`}
                            className="p-0 mt-1 text-sm leading-snug ml-11 font-semibold"
                          >
                            {v}
                          </AccordionContent>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <div className="w-full text-base px-2 py-2 font-normal">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      {item.title}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Accroche / promo */}
        {promoText && (
          <div className="text-primary font-medium mb-4">{promoText}</div>
        )}

        {/* Bloc prix avec espacement homogène */}
        <div className="mt-6 border-t pt-6">
          {price !== null && (
            <div className="space-y-1 mb-4 text-center">
              <div className="text-sm text-muted-foreground">À partir de</div>
              <div className="text-2xl font-bold">
                {price} {isSubscription ? "€/mois" : "€ HT"}
              </div>
              {isSubscription && (
                <div className="text-sm text-muted-foreground">
                  Engagement 12 mois
                </div>
              )}
            </div>
          )}

          <Button
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            {btnText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}