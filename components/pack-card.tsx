"use client";
import { CheckCircle, Package } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface PackCardProps  {
  name: string,
  items: {title: string, subs: string[]}[],
  price: number | null,
  isSubscription: boolean,
  promoText: string,
  btnText: string
}

export default function PackCard({name, items, price, isSubscription, promoText, btnText} : PackCardProps){

  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      router.push(`#${sectionId}`)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

    return <Card className="hover-lift border-primary/20 shadow-md hover:shadow-xl transition-all h-full">
    <CardContent className="p-4 text-center h-full flex flex-col">
      <div>
        <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Package className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>

      <ul className="space-y-1 text-left mt-4 flex-1">
        {items.map((value, index) => (
          <li key={`li-${index}`} className="flex items-start">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-base px-2 py-0 font-normal hover:no-underline">
                  <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                    {items[index]?.title}
                  </div>
                </AccordionTrigger>
                <div key={`g-${index}`} className="mb-4">
                  {items[index]?.subs.map((v, i) => <AccordionContent key={i} className="p-0 mt-1 text-sm leading-snug ml-11 font-semibold">{v}</AccordionContent>)}
                </div> 
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>

      {/* Avantage formation */}
      <div className="text-primary font-medium mb-4">
        {promoText}
      </div>

      <div className="mt-6 border-t pt-6">
        {
            price && <>
            <div className="text-sm text-muted-foreground">À partir de</div>
            <div className="text-2xl font-bold mb-4">{price} {isSubscription ? "€/mois" : "€ HT"}</div>
            </>
        }
        <Button
          className="w-4/6 bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300 cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          {btnText}
        </Button>
      </div>
    </CardContent>
  </Card>
}