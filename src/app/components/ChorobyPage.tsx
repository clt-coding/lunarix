import { Info, Pill, Activity, Apple } from "lucide-react";

const symptoms = [
  "Nieregularne lub rzadkie miesiączki (oligomenorrhoea)",
  "Nadmierne owłosienie – twarz, klatka piersiowa, plecy (hirsutyzm)",
  "Trądzik i przetłuszczanie się skóry",
  "Łysienie androgenowe (wypadanie włosów na głowie)",
  "Trudności z zajściem w ciążę (anovulacja)",
  "Przyrost masy ciała, szczególnie w okolicy brzucha",
  "Insulinooporność i ryzyko cukrzycy typu 2",
  "Ciemnienie skóry w fałdach (acanthosis nigricans)",
];

const diagnostics = [
  {
    name: "Badania hormonalne",
    desc: "LH, FSH, testosteron, prolaktyna, DHEA-S, insulina na czczo, HOMA-IR.",
  },
  {
    name: "USG jajników",
    desc: "Ocena liczby i wielkości pęcherzyków antralnych (≥20 lub ≥10 ml objętości jajnika).",
  },
  {
    name: "Profil metaboliczny",
    desc: "Glukoza na czczo, HbA1c, lipidogram – ocena insulinooporności.",
  },
  {
    name: "Kryterium Rotterdamskie",
    desc: "Diagnoza PCOS wymaga spełnienia 2 z 3 kryteriów: hiperandrogenizm, oligoowulacja, torbiele.",
  },
];

const lifestyleTips = [
  { icon: "🥦", tip: "Dieta niskoglikemiczna", desc: "Ograniczenie cukrów prostych i przetworzonej żywności poprawia insulinowrażliwość." },
  { icon: "🏃‍♀️", tip: "Aktywność fizyczna", desc: "30 min umiarkowanego wysiłku 5× w tygodniu reguluje poziom insuliny i androgenów." },
  { icon: "😴", tip: "Regularne godziny snu", desc: "Niedobór snu pogarsza insulinooporność i dysbalans hormonalny." },
  { icon: "🧘‍♀️", tip: "Zarządzanie stresem", desc: "Kortyzol nasila zaburzenia hormonalne – medytacja i joga mają udowodniony efekt." },
];

export function ChorobyPage() {
  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        className="relative px-6 py-20 overflow-hidden"
        style={{ background: "rgba(140,184,240,0.1)" }}
      >
        <div
          className="absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#8cb8f0", opacity: 0.12 }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(140,184,240,0.18)",
              color: "#8cb8f0",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              border: "1px solid rgba(140,184,240,0.3)",
            }}
          >
            ♀ Zaburzenia hormonalne
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              fontWeight: 700,
              marginBottom: "0.5rem",
              lineHeight: 1.15,
            }}
          >
            PCOS
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              color: "rgba(223,217,255,0.6)",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            Zespół policystycznych jajników
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Najczęstsze zaburzenie hormonalne u kobiet w wieku rozrodczym,
            dotykające od 5 do 15% populacji. PCOS wpływa nie tylko na
            płodność, ale też na metabolizm, wygląd i dobrostan psychiczny.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* What is PCOS */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Czym jest PCOS?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              marginBottom: "1rem",
            }}
          >
            PCOS to złożone zaburzenie endokrynologiczne, charakteryzujące się
            nadmiarem androgenów (hormonów „męskich"), zaburzonymi cyklami
            owulacyjnymi i często – obecnością licznych pęcherzyków antralnych
            w jajnikach (stąd nazwa „policystyczne"). Choroba ma podłoże
            genetyczne i środowiskowe.
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Insulinooporność – obecna u 50–70% kobiet z PCOS – jest kluczowym
            mechanizmem napędowym choroby. Wysoki poziom insuliny stymuluje
            jajniki do nadprodukcji androgenów, co z kolei hamuje owulację
            i nasila objawy kliniczne.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Objawy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-start gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(140,184,240,0.1)",
                  border: "1px solid rgba(140,184,240,0.2)",
                }}
              >
                <span style={{ color: "#8cb8f0", marginTop: "2px", flexShrink: 0 }}>
                  ✦
                </span>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#DFD9FF",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                  }}
                >
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Phenotypes */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Cztery fenotypy PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { f: "A", name: "Klasyczny z HA", desc: "Hiperandrogenizm + oligoowulacja + torbiele na USG (najcięższy)" },
              { f: "B", name: "Klasyczny bez torbieli", desc: "Hiperandrogenizm + oligoowulacja, bez torbieli na USG" },
              { f: "C", name: "Owulacyjny z HA", desc: "Hiperandrogenizm + torbiele, regularne owulacje" },
              { f: "D", name: "Bez hiperandrogenizmu", desc: "Oligoowulacja + torbiele, bez nadmiaru androgenów (najłagodniejszy)" },
            ].map(({ f, name, desc }) => (
              <div
                key={f}
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(140,184,240,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#8cb8f0", color: "#1a1040" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {name}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(223,217,255,0.6)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    paddingLeft: "2.75rem",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnostics */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Diagnostyka
          </h2>
          <div className="space-y-3">
            {diagnostics.map(({ name, desc }) => (
              <div
                key={name}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(223,217,255,0.08)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "#8cb8f0" }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#DFD9FF",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(223,217,255,0.6)",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Metody leczenia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                type: "Styl życia",
                color: "#80d9b4",
                items: [
                  "Dieta niskoglikemiczna",
                  "Regularna aktywność fizyczna",
                  "Redukcja masy ciała (5–10% poprawia owulację)",
                  "Ograniczenie stresu",
                ],
              },
              {
                icon: Pill,
                type: "Leczenie farmakologiczne",
                color: "#8cb8f0",
                items: [
                  "Metformina – redukcja insulinooporności",
                  "Antykoncepcja hormonalna – regulacja cyklu",
                  "Anty-androgeny (spironolakton)",
                  "Letrozol / klomifen – indukcja owulacji",
                ],
              },
              {
                icon: Apple,
                type: "Leczenie niepłodności",
                color: "#c17de0",
                items: [
                  "Letrozol (pierwsza linia)",
                  "Klomifen cytrynian",
                  "Gonadotropiny",
                  "In vitro (IVF) – przy braku odpowiedzi",
                ],
              },
            ].map(({ type, items, icon: Icon, color }) => (
              <div
                key={type}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${color}33`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#ffffff",
                    fontSize: "1.05rem",
                  }}
                >
                  {type}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "rgba(223,217,255,0.7)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color, flexShrink: 0 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Lifestyle */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Styl życia z PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifestyleTips.map(({ icon, tip, desc }) => (
              <div
                key={tip}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(223,217,255,0.1)",
                }}
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#DFD9FF",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {tip}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(223,217,255,0.6)",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-6 flex items-start gap-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(223,217,255,0.1)",
          }}
        >
          <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#DFD9FF" }} />
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.65)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#DFD9FF" }}>Informacja edukacyjna.</strong>{" "}
            Treści zawarte na tej stronie mają wyłącznie charakter informacyjny
            i nie zastępują porady medycznej. W przypadku objawów zawsze
            skonsultuj się z lekarzem endokrynologiem lub ginekologiem.
          </p>
        </div>
      </div>
    </div>
  );
}
