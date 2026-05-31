import { useState } from "react";
import { ShieldAlert } from "lucide-react";

const diseasesData = {
  pcos: {
    title: "PCOS (Zespół Policystycznych Jajników)",
    tag: "Zaburzenia owulacji i metabolizmu",
    desc: "Najczęstsze zaburzenie endokrynologiczne u kobiet w wieku rozrodczym. Głównym motorem choroby jest insulinooporność (u 50–70% pacjentek). Wysoki poziom insuliny stymuluje jajniki do nadprodukcji androgenów (męskich hormonów), co blokuje owulację, niszczy cerę i rozregulowuje cykl.",
    symptoms: [
      "Nieregularne lub rzadkie miesiączki (oligomenorrhoea) albo ich całkowity brak",
      "Hirsutyzm – nadmierne owłosienie na twarzy, klatce piersiowej i brzuchu",
      "Trądzik o podłożu hormonalnym oraz silne przetłuszczanie się skóry",
      "Łysienie androgenowe (przerzedzenie włosów na koronie głowy)",
      "Przyrost masy ciała, szczególnie w rzucie brzusznym (trzewnym)",
      "Acanthosis nigricans – ciemnienie skóry w fałdach (kark, pachy) jako objaw insulinooporności"
    ]
  },
  endometrioza: {
    title: "Endometrioza",
    tag: "Przewlekły systemowy stan zapalny",
    desc: "Choroba polegająca na obecności komórek błony śluzowej macicy (endometrium) poza jej naturalnym położeniem – najczęściej na jajnikach, otrzewnej, jelitach czy pęcherzu moczowym. Tkanka ta reaguje na cykl hormonalny, krwawi wewnętrznie, wywołując guzy, zrosty i potężny ból przewlekły.",
    symptoms: [
      "Dysmenorrhea – potworny, paraliżujący ból podbrzusza i krzyża podczas miesiączki",
      "Dyspareunia – głęboki ból w trakcie lub bezpośrednio po stosunku seksualnym",
      "Dyschezja i dysuria – ból przy wypróżnianiu lub oddawaniu moczu, nasilający się w trakcie okresu",
      "Przewlekły ból miednicy mniejszej, trwający niezależnie od fazy cyklu",
      "Tzw. Endo-belly – bolesne, nagłe wzdęcia brzucha przypominające ciążę, połączone z problemami jelitowymi",
      "Przewlekłe, obezwładniające zmęczenie wywołane ciągłą walką układu odpornościowego ze stanem zapalnym"
    ]
  },
  tarczyca: {
    niedoczynnosc: {
      title: "Niedoczynność Tarczycy",
      tag: "Spowolnienie metabolizmu komórkowego",
      desc: "Stan, w którym gruczoł tarczowy produkuje zbyt mało hormonów (tyroksyny T4 i trójjodotyroniny T3) w stosunku do zapotrzebowania organizmu. Skutkuje to 'zwolnieniem obrotów' wszystkich układów, w tym spowolnieniem pracy serca (bradykardia) i obniżeniem temperatury ciała.",
      symptoms: [
        "Permanentne zmęczenie, senność w ciągu dnia i ogólne osłabienie",
        "Niewyjaśniony przyrost masy ciała i ogromne trudności z jej redukcją",
        "Nietolerancja zimna – stałe uczucie chłodu, wiecznie zimne dłonie i stopy",
        "Skrajnie sucha, szorstka skóra (szczególnie na łokciach i kolanach) oraz łamliwe włosy",
        "Zaparcia, wzdęcia i spowolniona perystaltyka jelit",
        "Zaburzenia pamięci, koncentracji, tzw. mgła mózgowa i stany obniżonego nastroju"
      ]
    },
    nadczynnosc: {
      title: "Nadczynność Tarczycy",
      tag: "Hipermetabolizm i nadaktywność organów",
      desc: "Stan patologiczny wynikający z nadprodukcji hormonów tarczycy. Wprowadza organizm w stan stałego przyspieszenia – serce bije nienaturalnie szybko (tachykardia, wysokie tętno spoczynkowe w nocy), a metabolizm spala zasoby energetyczne w ekstremalnym tempie.",
      symptoms: [
        "Gwałtowny spadek masy ciała pomimo stałego, a nawet zwiększonego apetytu",
        "Kołatanie serca, tachykardia, uczucie niepokoju w klatce piersiowej",
        "Nietolerancja wysokich temperatur, uderzenia gorąca i nadmierna potliwość",
        "Wewnętrzny niepokój, bezsenność, skrajna drażliwość i nerwowość",
        "Widoczne, drobne drżenie rąk i osłabienie siły mięśniowej",
        "Przyspieszona praca jelit, częste wypróżnienia lub biegunki"
      ]
    },
    hashimoto: {
      title: "Choroba Hashimoto",
      tag: "Przewlekłe autoimmunologiczne zapalenie tarczycy",
      desc: "Choroba o podłożu układu odpornościowego, w której własne przeciwciała powoli niszczą tkankę tarczycy, prowadząc z czasem do jej włóknienia i trwałej niedoczynności. Stan zapalny ma charakter destrukcyjny i przewlekły.",
      symptoms: [
        "Przewlekłe zmęczenie, stany depresyjne i apatia",
        "Silne wahania nastroju i stany lękowe (związane z okresowymi rzutami hormonów)",
        "Mgła mózgowa, drastyczny spadek koncentracji i zdolności zapamiętywania",
        "Wędrujące bóle mięśniowe i bolesność stawów o nieznanej przyczynie",
        "Zaburzenia owulacji, nieregularne cykle i trudności z donoszeniem ciąży"
      ]
    }
  }
};

export function ChorobyPage() {
  const [activeTab, setActiveTab] = useState<"pcos" | "endometrioza" | "tarczyca">("pcos");
  const [thyroidSubtype, setThyroidSubtype] = useState<"niedoczynnosc" | "nadczynnosc" | "hashimoto">("niedoczynnosc");

  const getCurrentData = () => {
    if (activeTab !== "tarczyca") {
      return diseasesData[activeTab];
    }
    return diseasesData.tarczyca[thyroidSubtype];
  };

  const data = getCurrentData();

  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", background: "#4a3780", color: "#ffffff" }}>
      
      {/* --- MENU WYBORU CHOROBY (image_9801be.png) --- */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div 
          className="rounded-3xl p-2 flex flex-wrap gap-1"
          style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.12)" }}
        >
          {[
            { id: "pcos", label: "PCOS" },
            { id: "endometrioza", label: "Endometrioza" },
            { id: "tarczyca", label: "Choroby Tarczycy" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="flex-1 min-w-[140px] text-center px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "#4a3780" : "rgba(255, 255, 255, 0.8)",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* --- NAGŁÓWEK / KARTA OPISOWA --- */}
      <section className="max-w-4xl mx-auto px-6 pt-12">
        <div className="relative p-8 rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.06)]">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#ffffff", opacity: 0.1 }} />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
            {data.tag}
          </div>
          
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
            {data.title}
          </h1>
          
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#cbbfff", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "750px" }}>
            {data.desc}
          </p>

          {/* SUB-BUTTONY DLA TARCZYCY */}
          {activeTab === "tarczyca" && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[rgba(255,255,255,0.12)]">
              {[
                { id: "niedoczynnosc", label: "Niedoczynność" },
                { id: "nadczynnosc", label: "Nadczynność" },
                { id: "hashimoto", label: "Hashimoto" },
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setThyroidSubtype(sub.id as any)}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  style={{
                    background: thyroidSubtype === sub.id ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.05)",
                    color: "#ffffff",
                    border: `1px solid ${thyroidSubtype === sub.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}`
                  }}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- SEKCJA: SYGNAŁY ALARMOWE (image_97891f.png) --- */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-6 h-6 text-[#e8bfff]" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#ffffff", fontWeight: 600 }}>
              Sygnały alarmowe organizmu (Objawy)
            </h2>
          </div>
          <div className="space-y-3">
            {data.symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-4 rounded-2xl px-6 py-4 transition-all hover:bg-[rgba(255,255,255,0.09)]"
                style={{ background: "rgba(255, 255, 255, 0.07)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#e8bfff" }} />
                <span style={{ fontFamily: "'Nunito', sans-serif", color: "#ffffff", fontSize: "1rem" }}>
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}