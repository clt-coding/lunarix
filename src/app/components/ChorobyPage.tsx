import { useState } from "react";
import { ShieldAlert } from "lucide-react";

const diseasesData = {
    pcos: {
        title: "PCOS (Polycystic Ovary Syndrome)",
        tag: "Ovulatory and metabolic disorders",
        desc: "The most common endocrine disorder among women of reproductive age. The main driver of the condition is insulin resistance (present in 50–70% of patients). High insulin levels stimulate the ovaries to overproduce androgens (male hormones), which blocks ovulation, disrupts the skin, and deregulates the cycle.",
        symptoms: [
            "Irregular or infrequent periods (oligomenorrhoea) or their complete absence",
            "Hirsutism – excessive hair growth on the face, chest, and abdomen",
            "Hormonal acne and severe skin oiliness",
            "Androgenetic alopecia (hair thinning on the crown of the head)",
            "Weight gain, particularly in the abdominal (visceral) area",
            "Acanthosis nigricans – darkening of the skin in creases (neck, armpits) as a sign of insulin resistance"
        ]
    },
    endometrioza: {
        title: "Endometriosis",
        tag: "Chronic systemic inflammation",
        desc: "A condition characterized by the presence of endometrial-like tissue (the lining of the uterus) outside its natural location – most commonly on the ovaries, peritoneum, intestines, or bladder. This tissue responds to the hormonal cycle and bleeds internally, causing lesions, adhesions, and severe chronic pain.",
        symptoms: [
            "Dysmenorrhea – excruciating, paralyzing pelvic and lower back pain during menstruation",
            "Dyspareunia – deep pain during or immediately after sexual intercourse",
            "Dyschezia and dysuria – pain during bowel movements or urination, worsening during the period",
            "Chronic pelvic pain lasting independently of the cycle phase",
            "So-called 'Endo-belly' – painful, sudden abdominal bloating resembling pregnancy, combined with bowel issues",
            "Chronic, debilitating fatigue caused by the immune system's constant battle against inflammation"
        ]
    },
    tarczyca: {
        niedoczynnosc: {
            title: "Hypothyroidism",
            tag: "Slowing of cellular metabolism",
            desc: "A state in which the thyroid gland produces too little hormone (thyroxine T4 and triiodothyronine T3) relative to the body's needs. This results in 'slowing down' all systems, including a decreased heart rate (bradycardia) and lowered body temperature.",
            symptoms: [
                "Permanent fatigue, daytime sleepiness, and general weakness",
                "Unexplained weight gain and immense difficulty reducing it",
                "Cold intolerance – constant feeling of chilliness, perpetually cold hands and feet",
                "Extremely dry, rough skin (especially on elbows and knees) and brittle hair",
                "Constipation, bloating, and slowed intestinal peristalsis",
                "Memory and concentration problems, so-called brain fog, and low mood states"
            ]
        },
        nadczynnosc: {
            title: "Hyperthyroidism",
            tag: "Hypermetabolism and organ overactivity",
            desc: "A pathological state resulting from the overproduction of thyroid hormones. It puts the body into a state of constant acceleration – the heart beats unnaturally fast (tachycardia, high resting heart rate at night), and metabolism burns energy resources at an extreme pace.",
            symptoms: [
                "Rapid weight loss despite a stable or even increased appetite",
                "Heart palpitations, tachycardia, a feeling of anxiety in the chest",
                "Heat intolerance, hot flashes, and excessive sweating",
                "Internal restlessness, insomnia, extreme irritability, and nervousness",
                "Visible, fine tremors in the hands and muscle weakness",
                "Accelerated bowel activity, frequent bowel movements, or diarrhea"
            ]
        },
        hashimoto: {
            title: "Hashimoto's Disease",
            tag: "Chronic autoimmune thyroiditis",
            desc: "An immune system disorder in which the body's own antibodies slowly destroy thyroid tissue, eventually leading to fibrosis and permanent hypothyroidism. The inflammation is destructive and chronic in nature.",
            symptoms: [
                "Chronic fatigue, depressive states, and apathy",
                "Severe mood swings and anxiety (related to periodic hormone surges)",
                "Brain fog, a drastic drop in concentration, and memory capacity",
                "Wandering muscle pain and joint soreness of unknown origin",
                "Ovulatory disorders, irregular cycles, and difficulties maintaining pregnancy"
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
            { id: "endometrioza", label: "Endometriosis" },
            { id: "tarczyca", label: "Thyroid Diseases" },
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
                { id: "niedoczynnosc", label: "Hypothyroidism" },
                { id: "nadczynnosc", label: "Hyperthyroidism" },
                { id: "hashimoto", label: "Hashimoto's" },
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
                Body's Warning Signs (Symptoms)
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