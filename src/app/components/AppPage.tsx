import {
  Calendar,
  Activity,
  Bell,
  FileText,
  Shield,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Kalendarz cyklu",
    desc: "Śledź swój cykl menstruacyjny i przewiduj kolejne fazy z pomocą spersonalizowanych algorytmów.",
    color: "#c17de0",
  },
  {
    icon: Activity,
    title: "Monitoring biometryczny",
    desc: "Rejestruj tętno, wagę, temperaturę ciała, ciśnienie i inne wskaźniki zdrowotne każdego dnia.",
    color: "#8cb8f0",
  },
  {
    icon: Bell,
    title: "Przypomnienia o lekach",
    desc: "Inteligentne przypomnienia o dawkach leków, badaniach kontrolnych i wizytach u lekarza.",
    color: "#80d9b4",
  },
  {
    icon: FileText,
    title: "Raporty dla lekarza",
    desc: "Generuj kompleksowe raporty zdrowotne gotowe do okazania endokrynologowi lub ginekologowi.",
    color: "#f0b88c",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo danych",
    desc: "Twoje dane zdrowotne są szyfrowane end-to-end i nigdy nie trafiają do osób trzecich.",
    color: "#e87d9a",
  },
  {
    icon: Users,
    title: "Wspólnota kobiet",
    desc: "Dołącz do setek kobiet, które rozumieją Twoje wyzwania zdrowotne i wspierają się nawzajem.",
    color: "#a8d8a8",
  },
];

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: "260px",
        height: "520px",
        background: "#1a0d2e",
        borderRadius: "36px",
        border: "6px solid rgba(223,217,255,0.25)",
        boxShadow:
          "0 0 60px rgba(193,125,224,0.25), 0 0 120px rgba(73,55,128,0.4), inset 0 0 30px rgba(0,0,0,0.4)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "72px",
          height: "20px",
          background: "#000",
          borderRadius: "10px",
          zIndex: 10,
        }}
      />

      {/* Screen content */}
      <div className="pt-10 px-4 pb-4 h-full flex flex-col gap-3 overflow-hidden">
        {/* App bar */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <div
              style={{
                color: "#ffffff",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              🌙 Lunarix
            </div>
          </div>
          <div
            style={{
              background: "rgba(193,125,224,0.2)",
              color: "#c17de0",
              borderRadius: "20px",
              padding: "2px 8px",
              fontSize: "10px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
            }}
          >
            Dzień 14
          </div>
        </div>

        {/* Cycle bar */}
        <div
          style={{
            background: "rgba(223,217,255,0.07)",
            borderRadius: "14px",
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              color: "rgba(223,217,255,0.5)",
              fontSize: "9px",
              fontFamily: "'Nunito', sans-serif",
              marginBottom: "6px",
              letterSpacing: "0.08em",
            }}
          >
            CYKL MENSTRUACYJNY
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "5px",
                  borderRadius: "3px",
                  background:
                    i < 5
                      ? "#e87d9a"
                      : i < 14
                      ? "rgba(223,217,255,0.15)"
                      : i === 14
                      ? "#c17de0"
                      : "rgba(223,217,255,0.08)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              color: "#c17de0",
              fontSize: "10px",
              fontFamily: "'Nunito', sans-serif",
              marginTop: "5px",
              fontWeight: 600,
            }}
          >
            Faza owulacyjna
          </div>
        </div>

        {/* Symptoms */}
        <div
          style={{
            background: "rgba(223,217,255,0.07)",
            borderRadius: "14px",
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              color: "rgba(223,217,255,0.5)",
              fontSize: "9px",
              fontFamily: "'Nunito', sans-serif",
              marginBottom: "6px",
              letterSpacing: "0.08em",
            }}
          >
            DZISIEJSZE OBJAWY
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {["Zmęczenie", "Wzdęcia", "Ból głowy"].map((s) => (
              <span
                key={s}
                style={{
                  background: "rgba(193,125,224,0.25)",
                  color: "#c17de0",
                  fontSize: "9px",
                  padding: "2px 7px",
                  borderRadius: "8px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
              >
                {s}
              </span>
            ))}
            <span
              style={{
                background: "rgba(223,217,255,0.1)",
                color: "rgba(223,217,255,0.5)",
                fontSize: "9px",
                padding: "2px 7px",
                borderRadius: "8px",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              + Dodaj
            </span>
          </div>
        </div>

        {/* Biometrics */}
        <div
          style={{
            background: "rgba(223,217,255,0.07)",
            borderRadius: "14px",
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              color: "rgba(223,217,255,0.5)",
              fontSize: "9px",
              fontFamily: "'Nunito', sans-serif",
              marginBottom: "8px",
              letterSpacing: "0.08em",
            }}
          >
            BIOMETRYKI DZISIAJ
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px",
            }}
          >
            {[
              { label: "Tętno", value: "72 bpm", color: "#e87d9a" },
              { label: "Waga", value: "62.4 kg", color: "#8cb8f0" },
              { label: "Temp.", value: "36.7°C", color: "#80d9b4" },
              { label: "Nastrój", value: "😊 Dobry", color: "#c17de0" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  padding: "5px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color,
                    fontSize: "11px",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    color: "rgba(223,217,255,0.4)",
                    fontSize: "8px",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminder */}
        <div
          style={{
            background: "rgba(128,217,180,0.12)",
            border: "1px solid rgba(128,217,180,0.25)",
            borderRadius: "14px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "14px" }}>💊</span>
          <div>
            <div
              style={{
                color: "#80d9b4",
                fontSize: "10px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              Lek: Lewotyroksyna
            </div>
            <div
              style={{
                color: "rgba(223,217,255,0.5)",
                fontSize: "9px",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Przyjęta o 7:30 ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppPage() {
  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div
          className="absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#c17de0", opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#8cb8f0", opacity: 0.1 }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8"
                style={{
                  background: "rgba(223,217,255,0.1)",
                  color: "#DFD9FF",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  border: "1px solid rgba(223,217,255,0.2)",
                }}
              >
                📲 Wkrótce na App Store i Google Play
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  color: "#ffffff",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Aplikacja stworzona
                <br />
                <span style={{ color: "#DFD9FF" }}>z myślą o Tobie</span>
              </h1>

              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  maxWidth: "480px",
                }}
              >
                Lunarix to pierwsza polska aplikacja do monitorowania zdrowia
                zaprojektowana specjalnie dla kobiet z endometriozą, PCOS oraz
                chorobami tarczycy. Śledź objawy, biometryki i cykl – wszystko
                w jednym miejscu.
              </p>

              {/* Download buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{
                    background: "#ffffff",
                    color: "#1a1040",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <div style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>
                      Pobierz w
                    </div>
                    <div style={{ fontSize: "1rem" }}>App Store</div>
                  </div>
                </button>

                <button
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{
                    background: "#1a1040",
                    color: "#DFD9FF",
                    border: "1px solid rgba(223,217,255,0.2)",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  <span className="text-2xl">▶</span>
                  <div className="text-left">
                    <div style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>
                      Pobierz w
                    </div>
                    <div style={{ fontSize: "1rem" }}>Google Play</div>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { val: "4.9★", label: "Ocena" },
                  { val: "10k+", label: "Użytkowniczek" },
                  { val: "Gratis", label: "Pobierz za darmo" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "rgba(223,217,255,0.5)",
                        fontSize: "0.8rem",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="px-6 py-20"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "#ffffff",
            }}
          >
            Wszystko, czego potrzebujesz
          </h2>
          <p
            className="text-center mb-14"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.6)",
              fontSize: "1.05rem",
            }}
          >
            Funkcje zaprojektowane z myślą o kobietach z chorobami przewlekłymi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(223,217,255,0.1)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(223,217,255,0.6)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20">
        <div
          className="max-w-4xl mx-auto rounded-3xl px-8 py-16 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(193,125,224,0.2) 0%, rgba(140,184,240,0.15) 100%)",
            border: "1px solid rgba(223,217,255,0.15)",
          }}
        >
          <div
            className="absolute -top-10 -left-10 w-56 h-56 rounded-full blur-3xl pointer-events-none"
            style={{ background: "#c17de0", opacity: 0.15 }}
          />
          <div className="relative z-10">
            <div className="text-5xl mb-6">🌙</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Dołącz do Lunarix już dziś
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(223,217,255,0.65)",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "480px",
                margin: "0 auto 2rem",
              }}
            >
              Zacznij monitorować swoje zdrowie, rozumieć swoje ciało i żyć
              pełniej – nawet z chorobą przewlekłą.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  background: "#DFD9FF",
                  color: "#493780",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                🍎 Pobierz na iOS
              </button>
              <button
                className="px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  background: "rgba(223,217,255,0.12)",
                  color: "#DFD9FF",
                  border: "1px solid rgba(223,217,255,0.25)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                ▶ Pobierz na Android
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
