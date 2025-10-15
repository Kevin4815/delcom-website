import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function ZebraBubble() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full">
        {/* Zèbre - Hidden on small mobile, smaller on tablet */}
        <Image
          src="/zebre.png"
          alt="zèbre"
          width={230}
          height={230}
          className="hidden sm:block w-32 sm:w-40 lg:w-56 h-auto flex-shrink-0"
        />

        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {/* Bulle */}
          <div className="relative max-w-full sm:max-w-md bg-white border border-border rounded-2xl p-4 sm:p-6 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Parlons de votre projet</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Prêt à transformer votre idée en réalité digitale ? Contactez-nous pour discuter de vos besoins et obtenir
              un devis personnalisé.
            </p>

            {/* Flèche - Hidden on mobile */}
            <div className="hidden sm:block absolute top-8 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white" />
          </div>

          {/* Email + Adresse */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm sm:text-base">Email</div>
                <div className="text-xs sm:text-sm text-muted-foreground break-all">
                  contact@del-com.pro
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">Adresse</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Montauban, France</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
