import { useState } from "react";
import { Info } from "lucide-react";

type ProfilaktykaTab =
  | "wstep"
  | "co-zaburza"
  | "sygnaly"
  | "co-robic"
  | "podsumowanie";

const tabs: { id: ProfilaktykaTab; label: string }[] = [
  { id: "wstep", label: "Wstęp" },
  { id: "co-zaburza", label: "Co zaburza hormony?" },
  { id: "sygnaly", label: "Sygnały alarmowe" },
  { id: "co-robic", label: "Co możesz zrobić?" },
  { id: "podsumowanie", label: "Podsumowanie" },
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
          Dlaczego zaburzeń hormonalnych u kobiet przybywa?
        </SectionTitle>
        <BodyText>
          Zaburzenia hormonalne nie są przypadłością, która dotyka tylko
          nielicznych. W ciągu ostatnich pięciu dekad płodność kobiet
          systematycznie spada, a liczba rozpoznań takich schorzeń jak zespół
          policystycznych jajników (PCOS), endometrioza czy przedwczesna
          niewydolność jajników wyraźnie rośnie. Naukowcy wskazują, że za tymi
          trendami stoją w dużej mierze czynniki środowiskowe, substancje
          chemiczne obecne w naszym codziennym otoczeniu, przewlekły stres oraz
          styl życia, który coraz bardziej odbiega od naturalnych rytmów
          organizmu.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [1, 2]
          </span>
        </BodyText>
        <BodyText>
          PCOS jest dziś najczęstszym zaburzeniem endokrynologicznym u kobiet w
          wieku rozrodczym. Szacuje się, że dotyka od 5 do nawet 21% z nich, w
          zależności od kryteriów diagnostycznych i badanej populacji.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [6]
          </span>{" "}
          Przedwczesna niewydolność jajników z kolei dotyka jedną na sto kobiet
          przed 40. rokiem życia.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [7]
          </span>
        </BodyText>
        <BodyText>
          Liczby te pokazują, że problem jest powszechny i że warto wiedzieć, co
          możemy zrobić, żeby chronić swoje zdrowie hormonalne.
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
          Chemikalia w codziennym życiu – disruptory endokrynne
        </SectionTitle>
        <BodyText>
          Disruptory endokrynne (EDC) to substancje chemiczne, które naśladują
          działanie hormonów lub blokują ich receptory, zakłócając pracę całego
          układu hormonalnego. Są obecne: w opakowaniach do żywności,
          kosmetykach, środkach czystości, pestycydach, plastiku i elektronice.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [1]
          </span>
        </BodyText>
        <BodyText>
          Metaanaliza obejmująca ponad 83 000 kobiet wykazała, że ekspozycja na
          BPA niemal dwukrotnie zwiększa ryzyko endometriozy oraz o 61% podnosi
          ryzyko PCOS. Narażenie na kadm (metal ciężki obecny m.in. w dymie
          tytoniowym) zwiększa ryzyko endometriozy ponad 2,5-krotnie.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [5]
          </span>
        </BodyText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              label: "BPA a endometrioza",
              value: "~2×",
              desc: "wyższe ryzyko",
              color: "#c17de0",
            },
            {
              label: "BPA a PCOS",
              value: "+61%",
              desc: "wyższe ryzyko",
              color: "#f0b88c",
            },
            {
              label: "Kadm a endometrioza",
              value: "2,5×",
              desc: "wyższe ryzyko",
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
          Nowym zagrożeniem są też mikroplastiki oraz zanieczyszczenie powietrza
          w miastach, które coraz częściej łączone są ze zwiększonym ryzykiem
          PCOS i zaburzeń owulacji.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [6]
          </span>
        </BodyText>
      </section>

      <section>
        <SectionTitle>Przewlekły stres</SectionTitle>
        <BodyText>
          Stres stał się cichą pandemią naszych czasów. Presja społeczna, media
          społecznościowe, nadmiar obowiązków. Wszystko to prowadzi do
          przewlekłej aktywacji osi podwzgórze–przysadka–nadnercza (HPA). Wysoki
          poziom kortyzolu zakłóca wydzielanie GnRH, hormonu odpowiedzialnego za
          regulację całego cyklu menstruacyjnego.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [4]
          </span>
        </BodyText>
        <BodyText>
          Skutki mogą być różne w zależności od nasilenia: od skróconej fazy
          lutealnej i nieregularnych cykli, przez brak owulacji, aż do
          całkowitego zaniku miesiączki (czynnościowy brak miesiączki
          podwzgórzowy). Ten stan zwiększa ryzyko utraty gęstości kości i
          zaburzeń sercowo-naczyniowych.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [4]
          </span>
        </BodyText>
      </section>

      <section>
        <SectionTitle>Zaburzenia rytmu dobowego i praca nocna</SectionTitle>
        <BodyText>
          Badanie przeprowadzone na ponad 1150 kobietach wykazało istotny
          związek między pracą na nocnych zmianach a diagnozą PCOS. U kobiet z
          PCOS obserwowano zaburzenia dobowych rytmów wydzielania kluczowych
          hormonów, w tym prolaktyny i TSH.{" "}
          <span
            style={{ color: "rgba(223,217,255,0.45)", fontSize: "0.85rem" }}
          >
            [3]
          </span>{" "}
          Nieregularny sen i ekspozycja na światło niebieskie w nocy mogą
          realnie wpływać na gospodarkę hormonalną.
        </BodyText>
      </section>

      <section>
        <SectionTitle>Styl życia</SectionTitle>
        <BodyText>
          Otyłość, palenie tytoniu, nadmierne spożycie alkoholu oraz brak
          aktywności fizycznej przyspieszają starzenie się jajników i zwiększają
          ryzyko przedwczesnej niewydolności jajników. Zmiany epigenetyczne
          wywołane przez te czynniki mogą trwale wpływać na rezerwę jajnikową.{" "}
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
  "Nieregularne miesiączki (cykle krótsze niż 21 lub dłuższe niż 35 dni)",
  "Brak miesiączki przez 3 miesiące lub dłużej (przy wcześniej regularnych cyklach)",
  "Bardzo bolesne miesiączki, ból uniemożliwiający codzienne funkcjonowanie (może sugerować endometriozę)",
  "Bardzo obfite lub bardzo skąpe krwawienia",
  "Trądzik hormonalny, nadmierne owłosienie na twarzy lub brzuchu, wypadanie włosów",
  "Przewlekłe zmęczenie, wahania nastroju, trudności z koncentracją",
  "Nagłe przybieranie na wadze lub trudności z jej utratą mimo niezmienionego stylu życia",
  "Uderzenia gorąca lub nocne poty u kobiet przed 40. rokiem życia (mogą wskazywać na przedwczesną niewydolność jajników)",
];

function SygnałyContent() {
  return (
    <div className="space-y-8">
      <section>
        <SectionTitle>Kiedy twój cykl mówi, że coś jest nie tak?</SectionTitle>
        <BodyText>
          Zdrowy cykl menstruacyjny to jeden z najważniejszych wskaźników
          zdrowia hormonalnego kobiety. Warto zwrócić uwagę na następujące
          sygnały:
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
            <strong style={{ color: "#c17de0" }}>Pamiętaj:</strong> Każdy z tych
            objawów może mieć różne przyczyny. Jeśli jednak utrzymuje się lub
            nawraca, jest sygnałem do konsultacji z ginekologiem lub
            endokrynologiem.
          </p>
        </div>
      </section>
    </div>
  );
}

const wskazowki = [
  {
    title: "Ogranicz ekspozycję na plastik i EDC",
    color: "#80d9b4",
    items: [
      "Przechowuj żywność w szklanych lub stalowych pojemnikach",
      "Nie podgrzewaj jedzenia w plastikowych naczyniach",
      "Wybieraj kosmetyki wolne od parabenów, ftalanów i triclozanu",
      "Ograniczaj produkty w puszkach (wewnętrzna warstwa może zawierać BPA)",
      "Filtruj wodę pitną",
    ],
  },
  {
    title: "Zadbaj o sen i rytm dobowy",
    color: "#8cb8f0",
    items: [
      "Kładź się spać i wstawaj o stałych porach",
      "Ogranicz światło niebieskie minimum godzinę przed snem",
      "Jeśli pracujesz zmianowo, monitoruj zdrowie hormonalne regularnie",
    ],
  },
  {
    title: "Redukuj stres",
    color: "#f0b88c",
    items: [
      "Regularna aktywność fizyczna o umiarkowanej intensywności obniża kortyzol",
      "Techniki redukcji stresu: mindfulness, oddychanie przeponowe, joga",
      "Dbaj o granice między pracą a odpoczynkiem",
      "W razie potrzeby wsparcie psychologiczne",
    ],
  },
  {
    title: "Styl życia",
    color: "#c17de0",
    items: [
      "Nie pal tytoniu, palenie przyspiesza starzenie się jajników",
      "Ogranicz alkohol",
      "Dbaj o prawidłową masę ciała, zarówno nadwaga, jak i niedowaga zaburzają hormony",
      "Wybieraj żywność przeciwzapalną: warzywa, owoce, tłuste ryby, oliwa, orzechy",
    ],
  },
];

function CoRobicContent() {
  return (
    <div className="space-y-8">
      <section>
        <SectionTitle>Profilaktyka w praktyce</SectionTitle>
        <BodyText>
          Choć nie mamy wpływu na wszystkie czynniki środowiskowe, wiele z nich
          możemy ograniczyć. Oto konkretne działania, które mają poparcie w
          badaniach naukowych:
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
          Twoje zdrowie hormonalne zaczyna się od codziennych wyborów
        </SectionTitle>
        <BodyText>
          Zdrowie hormonalne kobiety kształtuje się przez całe życie. Jest
          wrażliwe na wiele czynników, które na co dzień mogą wydawać się
          niewinne. Substancje chemiczne w plastiku i kosmetykach, przewlekły
          stres, nieregularny sen czy niezdrowy styl życia to realne zagrożenia,
          które nauka coraz lepiej dokumentuje.
        </BodyText>
        <BodyText>
          Dobra wiadomość jest taka, że wiele z tych czynników możemy
          kontrolować. Świadome wybory co jemy, czym się otaczamy, jak śpimy i
          jak radzimy sobie ze stresem – mają znaczenie dla naszego układu
          hormonalnego. A gdy pojawią się niepokojące objawy, warto działać
          szybko i nie bagatelizować sygnałów, które wysyła ciało.
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
          Źródła naukowe
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
            🌿 Profilaktyka zaburzeń hormonalnych
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
            Profilaktyka
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
            Co zaburza równowagę hormonalną, jakie sygnały wysyła ciało i co
            możesz zrobić, żeby chronić swoje zdrowie hormonalne – oparte na
            aktualnych badaniach naukowych.
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
