import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ZebraBubble() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginTop: "40px" }}>
        {/* Zèbre */}
        <Image
          src="/zebre.png"
          alt="zèbre"
          width={230}
          height={230}
          style={{ height: "auto" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Bulle */}
          <div
            style={{
              position: "relative",
              maxWidth: "400px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
              Parlons de votre projet
            </h2>
            <p
              style={{
                marginTop: "8px",
                fontSize: "18px",
                color: "#555",
                lineHeight: "1.4",
              }}
            >
              Prêt à transformer votre idée en réalité digitale ? Contactez-nous
              pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>

            {/* Flèche */}
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "-15px",
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "15px solid #fff",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))",
              }}
            />
          </div>

          {/* Email + Adresse */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #9333ea)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail style={{ width: "24px", height: "24px", color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontWeight: "600" }}>Email</div>
                <div style={{ color: "#555" }}>
                  contact@darwinevolutionlogiciel.fr
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #9333ea)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin
                  style={{ width: "24px", height: "24px", color: "#fff" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: "600" }}>Adresse</div>
                <div style={{ color: "#555" }}>Montauban, France</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}