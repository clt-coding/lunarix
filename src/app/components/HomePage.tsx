import { Heart, Activity, Zap, ArrowRight, Download } from "lucide-react";
import type { Tab } from "../App";

interface HomePageProps {
  onTabChange: (tab: Tab) => void;
}

const diseases = [
  {
    id: "endometrioza" as Tab,
    icon: Heart,
    title: "Endometrioza",
    description:
      "Choroba, w której tkanka podobna do endometrium rośnie poza macicą – na jajnikach, jajowodach lub jelitach. Dotyka ok. 10% kobiet w wieku rozrodczym.",
    color: "#c17de0",
    stats: "176 mln kobiet na świecie",
  },
  {
    id: "pcos" as Tab,
    icon: Activity,
    title: "PCOS",
    description:
      "Zespół policystycznych jajników – najczęstsze zaburzenie hormonalne u kobiet. Prowadzi do nieregularnych cykli, hiperandrogenizmu i trudności z płodnością.",
    color: "#8cb8f0",
    stats: "1 na 10 kobiet",
  },
  {
    id: "tarczyca" as Tab,
    icon: Zap,
    title: "Choroby tarczycy",
    description:
      "Niedoczynność, nadczynność i Hashimoto – choroby tarczycy wpływają na metabolizm, energię i nastrój. Kobiety chorują na nie 8× częściej niż mężczyźni.",
    color: "#80d9b4",
    stats: "8× częściej u kobiet",
  },
];

export function HomePage({ onTabChange }: HomePageProps) {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div
          className="absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "#7b5ab8", opacity: 0.25 }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "#3d2d6e", opacity: 0.4 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "#5a3a9a", opacity: 0.12 }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">


          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Luna<span style={{ color: "#DFD9FF" }}>rix</span>
          </h1>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "rgba(223,217,255,0.85)",
              fontStyle: "italic",
              lineHeight: 1.5,
              marginBottom: "1rem",
            }}
          >
            Informacje, wsparcie i monitoring dla kobiet z endometriozą,
            PCOS i chorobami tarczycy
          </p>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(223,217,255,0.6)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "640px",
              margin: "0 auto 2.5rem",
            }}
          >
            Twoje ciało mówi. My pomagamy Ci słuchać. Lunarix łączy rzetelną
            wiedzę medyczną z inteligentnym śledzeniem objawów, aby wspierać
            Cię na każdym etapie Twojej drogi zdrowotnej.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onTabChange("endometrioza")}
              className="flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "#DFD9FF",
                color: "#493780",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Poznaj choroby
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onTabChange("aplikacja")}
              className="flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "rgba(223,217,255,0.1)",
                color: "#DFD9FF",
                border: "1px solid rgba(223,217,255,0.3)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              <Download className="w-4 h-4" />
              Pobierz aplikację
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="px-6 py-16"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              stat: "176 mln",
              desc: "kobiet na świecie cierpi na endometriozę",
            },
            {
              stat: "~10%",
              desc: "kobiet w wieku rozrodczym zmaga się z PCOS",
            },
            {
              stat: "8×",
              desc: "częściej choroby tarczycy dotykają kobiet niż mężczyzn",
            },
          ].map(({ stat, desc }) => (
            <div key={stat}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3rem",
                  color: "#ffffff",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat}
              </div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.6)",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Disease cards */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "#ffffff",
            }}
          >
            Nasze obszary zdrowia
          </h2>
          <p
            className="text-center mb-12"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.6)",
              fontSize: "1.05rem",
            }}
          >
            Rzetelne informacje o chorobach najczęściej diagnozowanych u kobiet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diseases.map(({ id, icon: Icon, title, description, color, stats }) => (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className="text-left rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(223,217,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${color}22` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    color: "#ffffff",
                  }}
                >
                  {title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(223,217,255,0.65)",
                    lineHeight: 1.65,
                    fontSize: "0.95rem",
                  }}
                >
                  {description}
                </p>

                <div
                  className="inline-block text-sm px-3 py-1 rounded-full mb-5"
                  style={{
                    background: `${color}22`,
                    color: color,
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {stats}
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ color }}
                >
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    Dowiedz się więcej
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* App teaser */}
      <section className="px-6 pb-20">
        <div
          className="max-w-6xl mx-auto rounded-3xl px-8 py-16 text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(223,217,255,0.12)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "#c17de0", opacity: 0.15 }}
          />
          <div className="relative z-10">
            <div className="text-5xl mb-5">🌙</div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                color: "#ffffff",
              }}
            >
              Monitoruj swoje zdrowie z Lunarix
            </h2>
            <p
              className="mb-8 max-w-xl mx-auto"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(223,217,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
              }}
            >
              Nasza aplikacja pozwala śledzić objawy, monitorować biometryki
              i generować raporty dla lekarza. Stworzona specjalnie dla kobiet
              z endometriozą, PCOS i chorobami tarczycy.
            </p>
            <button
              onClick={() => onTabChange("aplikacja")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                background: "#DFD9FF",
                color: "#493780",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <Download className="w-5 h-5" />
              Poznaj aplikację Lunarix
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
