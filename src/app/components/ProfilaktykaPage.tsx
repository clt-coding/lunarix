import { useState } from "react";
import { Info } from "lucide-react";

type ProfilaktykaTab =
  | "wstep"
  | "co-zaburza"
  | "sygnaly"
  | "co-robic"
  | "podsumowanie";

const tabs: { id: ProfilaktykaTab; label: string }[] = [
  { id: "wstep", label: "Introduction" },
  { id: "co-zaburza", label: "What disrupts hormones?" },
  { id: "sygnaly", label: "Warning signs" },
  { id: "co-robic", label: "What can you do?" },
  { id: "podsumowanie", label: "Summary" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem",
        color: "#ffffff",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h3>
  );
}

function BodyText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'Nunito', sans-serif",
        color: "rgba(223,217,255,0.75)",
        lineHeight: 1.8,
        fontSize: "1.05rem",
        marginBottom: "1rem",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function InfoCard({
  title,
  children,
  color,
}: {
  title: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      style={{
        background: `${color}10`,
        border: `1px solid ${color}30`,
        borderRadius: "1rem",
        padding: "1.25rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          color,
          fontWeight: 700,
          marginBottom: "0.5rem",
          fontSize: "1rem",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "rgba(223,217,255,0.7)",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function SymptomItem({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        background: `${color}0D`,
        border: `1px solid ${color}25`,
        borderRadius: "0.75rem",
        padding: "0.75rem 1rem",
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
        {children}
      </span>
    </div>
  );
}

function WstepContent() {
  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>
          Why are hormonal disorders in women on the rise?
        </SectionTitle>
        <BodyText>
          Hormonal disorders are not a condition that affects only a few. Over
          the past five decades, female fertility has been steadily declining,
          and the number of diagnoses of conditions such as polycystic ovary
          syndrome (PCOS), endometriosis, and premature ovarian insufficiency
          has been clearly rising. Scientists indicate that these trends are
          largely driven by environmental factors, chemicals present in our
          everyday surroundings, chronic stress, and a lifestyle that
          increasingly diverges from the body's natural rhythms.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [1, 2]
          </span>
        </BodyText>
        <BodyText>
          Today, PCOS the most common endocrine disorder in women of
          reproductive age. It is estimated to affect between 5 and as many as
          21% of women, depending on the diagnostic criteria and the population
          studied.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [6]
          </span>{" "}
          Premature ovarian insufficiency affects one in a hundred women before
          the age of 40.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [7]
          </span>
        </BodyText>
        <BodyText>
          These numbers show that the problem is widespread and that it is worth
          knowing what we can do to protect our hormonal health.
        </BodyText>
      </section>
    </div>
  );
}

function CoZaburzaContent() {
  return (
    <div className="space-y-12">
      <section>
        <SectionTitle>
          Chemicals in everyday life — endocrine disruptors
        </SectionTitle>
        <BodyText>
          Endocrine disruptors (EDCs) are chemical substances that mimic the
          action of hormones or block their receptors, disrupting the
          functioning of the entire hormonal system. They are present in: food
          packaging, cosmetics, cleaning products, pesticides, plastics, and
          electronics.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [1]
          </span>
        </BodyText>
        <BodyText>
          A meta-analysis covering over 83,000 women found that BPA exposure
          nearly doubles the risk of endometriosis and increases the risk of
          PCOS by 61%. Exposure to cadmium (a heavy metal found, among other
          sources, in tobacco smoke) increases the risk of endometriosis more
          than 2.5 times.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [5]
          </span>
        </BodyText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              label: "BPA and endometriosis",
              value: "~2×",
              desc: "higher risk",
              color: "#c17de0",
            },
            {
              label: "BPA and PCOS",
              value: "+61%",
              desc: "higher risk",
              color: "#f0b88c",
            },
            {
              label: "Cadmium and endometriosis",
              value: "2,5×",
              desc: "higher risk",
              color: "#80d9b4",
            },
          ].map(({ label, value, desc, color }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${color}33`,
                borderRadius: "1rem",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  color,
                  fontWeight: 700,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.5)",
                  fontSize: "0.8rem",
                  marginBottom: "0.25rem",
                }}
              >
                {desc}
              </div>
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.75)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
        <BodyText style={{ marginTop: "1.5rem" }}>
          Microplastics and urban air pollution are also emerging threats,
          increasingly linked to a higher risk of PCOS and ovulation disorders.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [6]
          </span>
        </BodyText>
      </section>

      <section>
        <SectionTitle>Chronic stress</SectionTitle>
        <BodyText>
          Stress has become a silent pandemic of our times. Social pressure,
          social media, an excess of responsibilities — all of this leads to
          chronic activation of the hypothalamic-pituitary-adrenal (HPA) axis.
          High cortisol levels disrupt GnRH secretion, the hormone responsible
          for regulating the entire menstrual cycle.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [4]
          </span>
        </BodyText>
        <BodyText>
          The effects can vary depending on severity: from a shortened luteal
          phase and irregular cycles, through lack of ovulation, to a complete
          absence of menstruation (functional hypothalamic amenorrhea). This
          condition increases the risk of bone density loss and cardiovascular
          disorders.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [4]
          </span>
        </BodyText>
      </section>

      <section>
        <SectionTitle>
          Circadian rhythm disruption and night shift work
        </SectionTitle>
        <BodyText>
          A study conducted on over 1,150 women found a significant association
          between night shift work and a diagnosis of PCOS. Women with PCOS
          showed disruptions in the circadian rhythms of key hormones, including
          prolactin and TSH.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [3]
          </span>{" "}
          Irregular sleep and exposure to blue light at night can have a real
          impact on hormonal balance.
        </BodyText>
      </section>

      <section>
        <SectionTitle>Lifestyle</SectionTitle>
        <BodyText>
          Obesity, smoking, excessive alcohol consumption, and physical
          inactivity accelerate ovarian aging and increase the risk of premature
          ovarian insufficiency. Epigenetic changes caused by these factors can
          permanently affect ovarian reserve.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [7]
          </span>
        </BodyText>
      </section>
    </div>
  );
}

const sygnaly = [
  "Irregular periods (cycles shorter than 21 or longer than 35 days)",
  "Absence of menstruation for 3 months or longer (in previously regular cycles)",
  "Very painful periods, pain that prevents daily functioning (may suggest endometriosis)",
  "Very heavy or very light bleeding",
  "Hormonal acne, excessive facial or abdominal hair growth, hair loss",
  "Chronic fatigue, mood swings, difficulty concentrating",
  "Sudden weight gain or difficulty losing weight despite no change in lifestyle",
  "Hot flashes or night sweats in women under 40 (may indicate premature ovarian insufficiency)",
];

function SygnałyContent() {
  return (
    <div className="space-y-8">
      <section>
        <SectionTitle>
          When does your cycle tell you something is wrong?
        </SectionTitle>
        <BodyText>
          A healthy menstrual cycle is one of the most important indicators of a
          woman's hormonal health. Pay attention to the following signals:
        </BodyText>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sygnaly.map((s) => (
            <SymptomItem key={s} color="#c17de0">
              {s}
            </SymptomItem>
          ))}
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            background: "rgba(193,125,224,0.08)",
            border: "1px solid rgba(193,125,224,0.2)",
            borderRadius: "1rem",
            padding: "1.25rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: "#c17de0" }}>Remember:</strong> Each of
            these symptoms can have various causes. However, if it persists or
            recurs, it is a signal to consult a gynecologist or endocrinologist.
          </p>
        </div>
      </section>
    </div>
  );
}

const wskazowki = [
  {
    title: "Limit exposure to plastic and EDCs",
    color: "#80d9b4",
    items: [
      "Store food in glass or steel containers",
      "Do not heat food in plastic containers",
      "Choose cosmetics free from parabens, phthalates, and triclosan",
      "Limit canned products (the inner lining may contain BPA)",
      "Filter your drinking water",
    ],
  },
  {
    title: "Take care of your sleep and circadian rhythm",
    color: "#8cb8f0",
    items: [
      "Go to bed and wake up at consistent times",
      "Limit blue light at least one hour before sleep",
      "If you work shifts, monitor your hormonal health regularly",
    ],
  },
  {
    title: "Reduce stress",
    color: "#f0b88c",
    items: [
      "Regular physical activity at moderate intensity lowers cortisol",
      "Stress reduction techniques: mindfulness, diaphragmatic breathing, yoga",
      "Maintain boundaries between work and rest",
      "Seek psychological support if needed",
    ],
  },
  {
    title: "Lifestyle",
    color: "#c17de0",
    items: [
      "Do not smoke, smoking accelerates ovarian aging",
      "Limit alcohol",
      "Maintain a healthy body weight, both overweight and underweight disrupt hormones",
      "Choose anti-inflammatory foods: vegetables, fruits, fatty fish, olive oil, nuts",
    ],
  },
];

function CoRobicContent() {
  return (
    <div className="space-y-8">
      <section>
        <SectionTitle>Profilaktyka w praktyce</SectionTitle>
        <BodyText>
          While we cannot control all environmental factors, many of them can be
          limited. Here are specific actions supported by scientific research:
        </BodyText>
        <div className="space-y-6">
          {wskazowki.map(({ title, color, items }) => (
            <div
              key={title}
              style={{
                background: `${color}08`,
                border: `1px solid ${color}25`,
                borderRadius: "1rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color,
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </div>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color, flexShrink: 0, marginTop: "2px" }}>
                      ✦
                    </span>
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "rgba(223,217,255,0.7)",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PodsumowanieContent() {
  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>
          Your hormonal health begins with everyday choices
        </SectionTitle>
        <BodyText>
          A woman's hormonal health is shaped throughout her lifetime. It is
          sensitive to many factors that may seem harmless on a daily basis.
          Chemicals in plastics and cosmetics, chronic stress, irregular sleep,
          and an unhealthy lifestyle are real threats that science is
          increasingly documenting.
        </BodyText>
        <BodyText>
          The good news is that many of these factors are within our control.
          Conscious choices about what we eat, what we surround ourselves with,
          how we sleep, and how we manage stress all matter for our hormonal
          system. And when concerning symptoms appear, it is worth acting
          quickly and not dismissing the signals your body sends.
        </BodyText>
      </section>

      <section>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Scientific references
        </h3>
        <div className="space-y-3">
          {[
            {
              n: 1,
              text: "Hassan et al. (2024). Endocrine disruptors: Unravelling the link between chemical exposure and Women's reproductive health. Environmental Research, 241, 117385.",
              doi: "https://doi.org/10.1016/j.envres.2023.117385",
            },
            {
              n: 2,
              text: "Parent et al. (2025). Endocrine-disrupting chemicals and female reproductive health: a growing concern. Nature Reviews Endocrinology.",
              doi: "https://doi.org/10.1038/s41574-025-01131-x",
            },
            {
              n: 3,
              text: "Wang et al. (2021). Association between circadian rhythm disruption and polycystic ovary syndrome. Fertility and Sterility, 115(3), 771–781.",
              doi: "https://doi.org/10.1016/j.fertnstert.2020.08.1425",
            },
            {
              n: 4,
              text: "Saadedine et al. (2025). The silent pandemic of stress: impact on menstrual cycle and ovulation. Stress, 28(1).",
              doi: "https://doi.org/10.1080/10253890.2025.2457767",
            },
            {
              n: 5,
              text: "Chitakwa et al. (2024). Plastic-related endocrine disrupting chemicals significantly related to the increased risk of estrogen-dependent diseases in women. Environmental Research, 252, 118966.",
              doi: "https://doi.org/10.1016/j.envres.2024.118966",
            },
            {
              n: 6,
              text: "Peebles & Mahalingaiah (2025). Environmental exposures and polycystic ovary syndrome: A review. Seminars in Reproductive Medicine.",
              doi: "https://doi.org/10.1055/s-0044-1801405",
            },
            {
              n: 7,
              text: "Evangelinakis et al. (2024). The influence of environmental factors on premature ovarian insufficiency and ovarian aging. Maturitas, 178, 107871.",
              doi: "https://doi.org/10.1016/j.maturitas.2023.107871",
            },
          ].map(({ n, text, doi }) => (
            <div
              key={n}
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(223,217,255,0.08)",
                borderRadius: "0.75rem",
                padding: "0.75rem 1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#80d9b4",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontSize: "0.9rem",
                  minWidth: "1.25rem",
                }}
              >
                [{n}]
              </span>
              <div>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(223,217,255,0.6)",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {text}{" "}
                </span>
                <a
                  href={doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#80d9b4",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                  }}
                >
                  {doi}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ProfilaktykaPage() {
  const [activeTab, setActiveTab] = useState<ProfilaktykaTab>("wstep");

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
            Prevention of Hormonal Disorders
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
            Prevention
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
            What disrupts hormonal balance, what signals your body sends, and
            what you can do to protect your hormonal health — based on current
            scientific research.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-12 p-2 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 px-5 py-3 rounded-xl text-sm transition-all duration-200"
              style={{
                color:
                  activeTab === tab.id ? "#493780" : "rgba(223,217,255,0.65)",
                background: activeTab === tab.id ? "#DFD9FF" : "transparent",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: activeTab === tab.id ? 700 : 500,
                minWidth: "fit-content",
                border: "none",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "wstep" && <WstepContent />}
        {activeTab === "co-zaburza" && <CoZaburzaContent />}
        {activeTab === "sygnaly" && <SygnałyContent />}
        {activeTab === "co-robic" && <CoRobicContent />}
        {activeTab === "podsumowanie" && <PodsumowanieContent />}

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-6 flex items-start gap-4 mt-16"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(223,217,255,0.1)",
          }}
        >
          <Info
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: "#DFD9FF" }}
          />
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.65)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#DFD9FF" }}>
              Educational information.
            </strong>{" "}
            The content on this page is for informational purposes only and does
            not replace medical advice. If you experience symptoms, always
            consult an endocrinologist or gynecologist.
          </p>
        </div>
      </div>
    </div>
  );
}
