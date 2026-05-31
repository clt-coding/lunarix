import { AlertCircle, Stethoscope, Pill, Info } from "lucide-react";

const symptoms = [
  "Silny ból podczas menstruacji (dysmenorrhoea)",
  "Ból podczas stosunku płciowego (dyspareunia)",
  "Ból podczas wypróżniania lub oddawania moczu",
  "Obfite lub nieregularne krwawienia miesięczne",
  "Trudności z zajściem w ciążę",
  "Przewlekły ból miednicy przez cały cykl",
  "Nasilone zmęczenie i wyczerpanie",
  "Wzdęcia i nudności, szczególnie podczas menstruacji",
];

const stages = [
  {
    stage: "I",
    name: "Minimalna",
    desc: "Nieliczne izolowane ogniska bez istotnych zrostów.",
  },
  {
    stage: "II",
    name: "Łagodna",
    desc: "Więcej ognisk, płytkie zrosty, brak dużych torbieli.",
  },
  {
    stage: "III",
    name: "Umiarkowana",
    desc: "Liczne ogniska, zrosty, małe torbiele jajnikowe.",
  },
  {
    stage: "IV",
    name: "Ciężka",
    desc: "Głęboko naciekające zmiany, duże torbiele (endometriomy).",
  },
];

const treatments = [
  {
    type: "Leczenie bólu",
    items: ["NLPZ (ibuprofen, naproksen)", "Paracetamol", "Leki rozkurczowe"],
    icon: Pill,
    color: "#c17de0",
  },
  {
    type: "Leczenie hormonalne",
    items: [
      "Antykoncepcja hormonalna (tabletki, wkładka)",
      "Progestyny – dienogest",
      "Agoniści GnRH",
      "Danazol",
    ],
    icon: AlertCircle,
    color: "#8cb8f0",
  },
  {
    type: "Leczenie chirurgiczne",
    items: [
      "Laparoskopia – usunięcie ognisk",
      "Drenaż torbieli endometrialnych",
      "Hysterektomia (w skrajnych przypadkach)",
    ],
    icon: Stethoscope,
    color: "#80d9b4",
  },
];

export function EndometriosisPage() {
  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        className="relative px-6 py-20 overflow-hidden"
        style={{ background: "rgba(193,125,224,0.12)" }}
      >
        <div
          className="absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#c17de0", opacity: 0.15 }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(193,125,224,0.2)",
              color: "#c17de0",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              border: "1px solid rgba(193,125,224,0.3)",
            }}
          >
            ♀ Choroby ginekologiczne
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Endometrioza
          </h1>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Jedna z najczęściej diagnozowanych, a jednocześnie najtrudniejszych
            do wykrycia chorób ginekologicznych. Średni czas do diagnozy wynosi
            7–10 lat.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* What is it */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Czym jest endometrioza?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Endometrioza to choroba, w której tkanka podobna do błony śluzowej
            macicy (endometrium) rośnie poza macicą – najczęściej na jajnikach,
            jajowodach, jelitach, pęcherzu lub otrzewnej. Podczas każdej
            menstruacji tkanka ta reaguje na hormony tak samo jak normalne
            endometrium – krwawi, ale krew nie ma gdzie odpłynąć. Prowadzi to
            do stanów zapalnych, zrostów i torbieli (endometriomów).
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Choroba dotyka ok. 10–15% kobiet w wieku rozrodczym i jest jedną
            z głównych przyczyn niepłodności. Endometrioza jest chorobą
            przewlekłą – nie ma na nią lekarstwa, ale odpowiednie leczenie
            pozwala skutecznie kontrolować objawy.
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
                  background: "rgba(193,125,224,0.1)",
                  border: "1px solid rgba(193,125,224,0.2)",
                }}
              >
                <span style={{ color: "#c17de0", marginTop: "2px", flexShrink: 0 }}>
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

          <div
            className="flex items-start gap-3 rounded-xl p-4 mt-4"
            style={{
              background: "rgba(255,200,100,0.08)",
              border: "1px solid rgba(255,200,100,0.2)",
            }}
          >
            <Info className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f0c87d" }} />
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(223,217,255,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#f0c87d" }}>Ważne:</strong> Nasilenie
              objawów nie zawsze odpowiada zaawansowaniu choroby – niektóre
              kobiety z endometriozą IV stopnia mogą odczuwać minimalne
              dolegliwości, a inne z I stopniem – znaczny ból.
            </p>
          </div>
        </section>

        {/* Stages */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Stopnie zaawansowania
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stages.map(({ stage, name, desc }) => (
              <div
                key={stage}
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(223,217,255,0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#c17de0", color: "#ffffff" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {stage}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {name}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(223,217,255,0.65)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    paddingLeft: "2.75rem",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnosis */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Diagnostyka
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
            Złotym standardem diagnostycznym jest laparoskopia – minimalno
            inwazyjna operacja, podczas której lekarz może bezpośrednio
            zobaczyć i pobrać wycinki zmian. Inne metody diagnostyczne:
          </p>
          <div className="space-y-3">
            {[
              { name: "Ultrasonografia (USG)", desc: "Wykrywa torbiele jajnikowe i głęboko infiltrującą endometriozę jelitową." },
              { name: "MRI (rezonans magnetyczny)", desc: "Szczegółowe mapowanie zmian przed planowaną operacją." },
              { name: "Badania krwi – CA-125", desc: "Marker pomocniczy, nie jest swoisty dla endometriozy." },
              { name: "Laparoskopia diagnostyczna", desc: "Jedyna metoda pozwalająca potwierdzić rozpoznanie histologicznie." },
            ].map(({ name, desc }) => (
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
                  style={{ background: "#c17de0" }}
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
            {treatments.map(({ type, items, icon: Icon, color }) => (
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
            Treści zawarte na tej stronie mają wyłącznie charakter
            informacyjny i nie zastępują porady medycznej. W przypadku
            objawów zawsze skonsultuj się z lekarzem ginekologiem.
          </p>
        </div>
      </div>
    </div>
  );
}
