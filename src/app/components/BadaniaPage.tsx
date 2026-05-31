import { useState } from "react";
import { Info } from "lucide-react";

type ThyroidTab = "niedoczynnosc" | "nadczynnosc" | "hashimoto";

const subTabs: { id: ThyroidTab; label: string }[] = [
  { id: "niedoczynnosc", label: "Niedoczynność tarczycy" },
  { id: "nadczynnosc", label: "Nadczynność tarczycy" },
  { id: "hashimoto", label: "Hashimoto" },
];

const hypoSymptoms = [
  "Chroniczne zmęczenie i nadmierna senność",
  "Przyrost masy ciała bez zmiany diety",
  "Uczucie zimna, dreszcze",
  "Sucha, szorstka skóra",
  "Łamliwe, wypadające włosy i paznokcie",
  "Zaparcia",
  "Depresja i spowolnienie procesów myślowych",
  "Spowolnione tętno (bradykardia)",
  "Obrzęk twarzy i kończyn",
  "Zaburzenia cyklu menstruacyjnego",
];

const hyperSymptoms = [
  "Nerwowość, lęk, drażliwość",
  "Szybkie bicie serca (tachykardia) lub kołatania",
  "Utrata masy ciała mimo normalnego apetytu",
  "Nadmierne pocenie i nietolerancja ciepła",
  "Drżenie rąk",
  "Problemy ze snem (bezsenność)",
  "Wytrzeszcz oczu (w chorobie Gravesa)",
  "Częste stolce lub biegunka",
  "Osłabienie mięśni",
  "Wole (powiększona tarczyca)",
];

const hashimotoSymptoms = [
  "Objawy niedoczynności tarczycy (patrz wyżej)",
  "Wahania między niedoczynnością a nadczynnością (hashitoksykoza)",
  "Ból i tkliwość szyi",
  "Zmęczenie nieproporcjonalne do aktywności",
  "Mgła mózgowa i problemy z koncentracją",
  "Objawy innych chorób autoimmunologicznych",
];

function SymptomsGrid({
  symptoms,
  color,
}: {
  symptoms: string[];
  color: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {symptoms.map((symptom) => (
        <div
          key={symptom}
          className="flex items-start gap-3 rounded-xl px-4 py-3"
          style={{
            background: `${color}14`,
            border: `1px solid ${color}33`,
          }}
        >
          <span style={{ color, marginTop: "2px", flexShrink: 0 }}>✦</span>
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
  );
}

function HypoContent() {
  return (
    <div className="space-y-12">
      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Czym jest niedoczynność tarczycy?
        </h3>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: "1rem",
          }}
        >
          Niedoczynność tarczycy (hypothyroidism) to stan, w którym gruczoł
          tarczowy produkuje zbyt mało hormonów – tyroksyny (T4) i
          trójjodotyroniny (T3). Hormony tarczycy regulują metabolizm
          niemal każdej komórki organizmu, dlatego ich niedobór powoduje
          szerokie spektrum objawów.
        </p>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}
        >
          Najczęstszą przyczyną jest choroba Hashimoto (autoimmunologiczne
          zapalenie tarczycy). Inne przyczyny to leczenie radiojodem,
          operacja tarczycy lub niedobór jodu.
        </p>
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          Objawy
        </h3>
        <SymptomsGrid symptoms={hypoSymptoms} color="#80d9b4" />
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Diagnostyka i leczenie
        </h3>
        <div className="space-y-4">
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(128,217,180,0.08)",
              border: "1px solid rgba(128,217,180,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#80d9b4",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Badania laboratoryjne
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(223,217,255,0.7)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              TSH (podwyższone), FT4 (obniżone), FT3 (obniżone), przeciwciała
              anty-TPO i anty-Tg (przy podejrzeniu Hashimoto).
            </p>
          </div>
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(128,217,180,0.08)",
              border: "1px solid rgba(128,217,180,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#80d9b4",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Leczenie
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(223,217,255,0.7)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Substytucja hormonalna lewotyroksyną (L-T4) w formie tabletek.
              Dawkowanie jest indywidualnie dobierane na podstawie TSH i
              samopoczucia. Leczenie trwa zazwyczaj przez całe życie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function HyperContent() {
  return (
    <div className="space-y-12">
      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Czym jest nadczynność tarczycy?
        </h3>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: "1rem",
          }}
        >
          Nadczynność tarczycy (hyperthyroidism) to nadmiar hormonów tarczycy
          we krwi. Przyspiesza wszystkie procesy metaboliczne, wywołując
          szereg gwałtownych i uciążliwych objawów. Najczęstszą przyczyną
          jest choroba Gravesa-Basedowa (autoimmunologiczna), wole guzkowe
          toksyczne lub zapalenie tarczycy.
        </p>
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          Objawy
        </h3>
        <SymptomsGrid symptoms={hyperSymptoms} color="#f0b88c" />
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          Metody leczenia
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Leki tyreostatyczne",
              desc: "Tiamazol lub propylotiouracyl – hamują syntezę hormonów tarczycy. Leczenie I rzutu u większości pacjentek.",
              color: "#f0b88c",
            },
            {
              title: "Jod radioaktywny (I-131)",
              desc: "Niszczy tkankę tarczycy i trwale redukuje jej aktywność. Powoduje zazwyczaj niedoczynność tarczycy wymagającą leczenia substytucyjnego.",
              color: "#c17de0",
            },
            {
              title: "Operacja – tyreoidektomia",
              desc: "Usunięcie całej lub części tarczycy. Stosowane przy wolu dużych rozmiarów lub nieskuteczności leczenia farmakologicznego.",
              color: "#80d9b4",
            },
          ].map(({ title, desc, color }) => (
            <div
              key={title}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${color}33`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ background: color }}
              />
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.65)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function HashimotoContent() {
  return (
    <div className="space-y-12">
      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Czym jest choroba Hashimoto?
        </h3>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: "1rem",
          }}
        >
          Choroba Hashimoto (limfocytarne zapalenie tarczycy) to choroba
          autoimmunologiczna, w której układ odpornościowy błędnie atakuje
          własny gruczoł tarczowy. Z czasem prowadzi to do stopniowego
          niszczenia tkanki tarczycy i rozwoju niedoczynności.
        </p>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: "1rem",
          }}
        >
          Hashimoto jest najczęstszą przyczyną niedoczynności tarczycy w
          krajach uprzemysłowionych. Choroba 7–10× częściej dotyczy kobiet
          niż mężczyzn i może współwystępować z innymi chorobami
          autoimmunologicznymi (celiakią, RZS, toczniem).
        </p>
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          Objawy
        </h3>
        <SymptomsGrid symptoms={hashimotoSymptoms} color="#8cb8f0" />
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          Diagnostyka i leczenie
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Badania krwi",
              desc: "Anty-TPO (najistotniejsze), anty-Tg, TSH, FT3, FT4. Wysokie poziomy przeciwciał potwierdzają autoimmunologiczne podłoże.",
              color: "#8cb8f0",
            },
            {
              title: "USG tarczycy",
              desc: "Obraz hipoechogeniczny, niejednorodna struktura, zmniejszona objętość gruczołu – typowe dla Hashimoto.",
              color: "#8cb8f0",
            },
            {
              title: "Leczenie hormonalne",
              desc: "Lewotyroksyna (L-T4) gdy TSH przekracza normy lub przy wyraźnych objawach. Nie ma leczenia przyczynowego dla samego procesu autoimmunologicznego.",
              color: "#8cb8f0",
            },
            {
              title: "Dieta i styl życia",
              desc: "Dieta bezglutenowa u chorych z współistniejącą celiakią. Selen (200 µg/dobę) może obniżać poziom przeciwciał. Unikanie nadmiaru jodu.",
              color: "#8cb8f0",
            },
          ].map(({ title, desc, color }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(223,217,255,0.08)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ background: color }}
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
                  {title}
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

      <div
        className="rounded-2xl p-5"
        style={{
          background: "rgba(140,184,240,0.08)",
          border: "1px solid rgba(140,184,240,0.2)",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "rgba(223,217,255,0.75)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#8cb8f0" }}>Ważne:</strong> Hashimoto to
          choroba przewlekła, ale przy odpowiednim leczeniu i monitorowaniu
          TSH można prowadzić pełnowartościowe życie. Regularne badania
          kontrolne (co 6–12 miesięcy) są kluczowe.
        </p>
      </div>
    </div>
  );
}

export function BadaniaPage() {
  const [activeSubTab, setActiveSubTab] = useState<ThyroidTab>("niedoczynnosc");

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        className="relative px-6 py-20 overflow-hidden"
        style={{ background: "rgba(128,217,180,0.08)" }}
      >
        <div
          className="absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#80d9b4", opacity: 0.1 }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(128,217,180,0.15)",
              color: "#80d9b4",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              border: "1px solid rgba(128,217,180,0.3)",
            }}
          >
            🦋 Choroby autoimmunologiczne i hormonalne
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
            Choroby tarczycy
          </h1>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Tarczyca to mały gruczoł o wielkim znaczeniu. Jej hormony regulują
            metabolizm, temperaturę ciała, rytm serca, nastrój i płodność.
            Choroby tarczycy są 7–10× częstsze u kobiet.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Sub-tabs */}
        <div
          className="flex flex-wrap gap-2 mb-12 p-2 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className="flex-1 px-5 py-3 rounded-xl text-sm transition-all duration-200"
              style={{
                color:
                  activeSubTab === tab.id ? "#493780" : "rgba(223,217,255,0.65)",
                background:
                  activeSubTab === tab.id ? "#DFD9FF" : "transparent",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: activeSubTab === tab.id ? 700 : 500,
                minWidth: "fit-content",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSubTab === "niedoczynnosc" && <HypoContent />}
        {activeSubTab === "nadczynnosc" && <HyperContent />}
        {activeSubTab === "hashimoto" && <HashimotoContent />}

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-6 flex items-start gap-4 mt-16"
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
            skonsultuj się z lekarzem endokrynologiem.
          </p>
        </div>
      </div>
    </div>
  );
}
