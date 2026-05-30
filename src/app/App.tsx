import { useState } from "react";
import { WatchShell, WatchScreen } from "./components/WatchScreen";
import {
  Heart, Activity, Thermometer, Droplets, Moon, Plus,
  ChevronRight, CheckCircle2, Circle, Zap, Calendar,
  TrendingUp, AlertCircle, Clock
} from "lucide-react";

// {/* MARKER-MAKE-KIT-INVOKED */}

const ACCENT = "#e8749a";
const DIM = "#7070a0";
const CARD_BG = "#161620";
const CARD_BORDER = "rgba(255,255,255,0.07)";

type Screen = "home" | "biometrics" | "symptoms" | "cycle" | "insights" | "log";

const SEVERITY_COLORS = ["#34d399", "#fbbf24", "#fb923c", "#ef4444", "#dc2626"];

interface BiometricCard {
  icon: typeof Heart;
  label: string;
  value: string;
  unit: string;
  trend?: string;
  color: string;
  sub?: string;
}

const BIOMETRICS: BiometricCard[] = [
  { icon: Heart, label: "Heart Rate", value: "72", unit: "BPM", trend: "+3", color: "#e8749a", sub: "Resting" },
  { icon: Activity, label: "HRV", value: "41", unit: "ms", trend: "-5", color: "#a78bfa", sub: "Low" },
  { icon: Thermometer, label: "Body Temp", value: "+0.4", unit: "°C", trend: "", color: "#fb923c", sub: "Elevated" },
  { icon: Droplets, label: "Blood O₂", value: "98", unit: "%", trend: "", color: "#34d399", sub: "Normal" },
  { icon: Moon, label: "Sleep", value: "6h 12m", unit: "", trend: "-48m", color: "#60a5fa", sub: "Below avg" },
  { icon: Zap, label: "Energy", value: "62", unit: "%", trend: "", color: "#fbbf24", sub: "Moderate" },
];

interface Symptom {
  id: string;
  label: string;
  logged: boolean;
  severity?: number;
}

const INIT_SYMPTOMS: Symptom[] = [
  { id: "pain", label: "Pelvic pain", logged: true, severity: 3 },
  { id: "bloat", label: "Bloating", logged: true, severity: 2 },
  { id: "fatigue", label: "Fatigue", logged: false },
  { id: "nausea", label: "Nausea", logged: false },
  { id: "mood", label: "Mood changes", logged: true, severity: 1 },
  { id: "cramps", label: "Cramping", logged: false },
];

function StatBadge({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span style={{ color, fontSize: 15, fontWeight: 700, lineHeight: 1 }}>{value}</span>
      <span style={{ color: DIM, fontSize: 8, fontWeight: 500, letterSpacing: "0.03em" }}>{label}</span>
    </div>
  );
}

function HomeScreen({ onNav }: { onNav: (s: Screen) => void }) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <WatchScreen>
      <div className="flex flex-col items-center px-3 pt-2 pb-3 gap-2.5">
        <div className="text-center">
          <div style={{ color: "#f0f0f5", fontSize: 28, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1 }}>
            {timeStr}
          </div>
          <div style={{ color: DIM, fontSize: 10, marginTop: 2, letterSpacing: "0.04em" }}>{dateStr}</div>
        </div>

        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44` }}
        >
          <Calendar size={9} color={ACCENT} />
          <span style={{ color: ACCENT, fontSize: 10, fontWeight: 600 }}>Cycle Day 18</span>
        </div>

        <div
          className="w-full flex justify-around py-2 rounded-2xl"
          style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, paddingLeft: 7, paddingRight: 7 }}
        >
          <StatBadge value="72" label="BPM" color="#e8749a" />
          <div style={{ width: 1, background: CARD_BORDER }} />
          <StatBadge value="98%" label="SpO₂" color="#34d399" />
          <div style={{ width: 1, background: CARD_BORDER }} />
          <StatBadge value="+0.4°" label="TEMP" color="#fb923c" />
        </div>

        <div
          className="w-full flex items-start gap-2 px-2.5 py-2 rounded-xl"
          style={{ background: "#fb923c18", border: "1px solid #fb923c33" }}
        >
          <AlertCircle size={11} color="#fb923c" style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ color: "#fbd38d", fontSize: 9.5, lineHeight: 1.4 }}>
            Temp elevated. Possible pre-menstrual phase.
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-1.5">
          {[
            { label: "Biometrics", screen: "biometrics" as Screen, icon: Activity, color: "#a78bfa" },
            { label: "Symptoms", screen: "symptoms" as Screen, icon: Droplets, color: ACCENT },
            { label: "Cycle", screen: "cycle" as Screen, icon: Calendar, color: "#60a5fa" },
            { label: "Insights", screen: "insights" as Screen, icon: TrendingUp, color: "#34d399" },
          ].map(({ label, screen, icon: Icon, color }) => (
            <button
              key={screen}
              onClick={() => onNav(screen)}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl transition-opacity active:opacity-70"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, textAlign: "left" }}
            >
              <Icon size={11} color={color} />
              <span style={{ color: "#c8c8d8", fontSize: 9.5, fontWeight: 500 }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </WatchScreen>
  );
}

function BiometricsScreen({ onBack }: { onBack: () => void }) {
  return (
    <WatchScreen title="Health Data">
      <div className="flex flex-col gap-1.5 px-3 pb-3">
        {BIOMETRICS.map(({ icon: Icon, label, value, unit, trend, color, sub }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <div
              className="flex items-center justify-center rounded-lg flex-shrink-0"
              style={{ width: 26, height: 26, background: `${color}20` }}
            >
              <Icon size={12} color={color} />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ color: DIM, fontSize: 8.5, fontWeight: 500, letterSpacing: "0.03em" }}>{label}</div>
              <div className="flex items-baseline gap-1">
                <span style={{ color: "#f0f0f5", fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>{value}</span>
                {unit && <span style={{ color: DIM, fontSize: 8 }}>{unit}</span>}
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span style={{ color: DIM, fontSize: 8 }}>{sub}</span>
              {trend && (
                <span style={{ color: trend.startsWith("+") ? "#fb923c" : "#34d399", fontSize: 8, fontWeight: 600 }}>
                  {trend}
                </span>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={onBack}
          className="mt-1 py-2 rounded-xl text-center transition-opacity active:opacity-70"
          style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT, fontSize: 10, fontWeight: 600 }}
        >
          ← Back
        </button>
      </div>
    </WatchScreen>
  );
}

function SymptomsScreen({ onBack, onLog }: { onBack: () => void; onLog: () => void }) {
  const [symptoms, setSymptoms] = useState<Symptom[]>(INIT_SYMPTOMS);

  const toggleSymptom = (id: string) => {
    setSymptoms(prev => prev.map(s =>
      s.id === id ? { ...s, logged: !s.logged, severity: s.logged ? undefined : 2 } : s
    ));
  };

  const loggedCount = symptoms.filter(s => s.logged).length;

  return (
    <WatchScreen title="Symptoms">
      <div className="flex flex-col px-3 pb-3 gap-1.5">
        <div
          className="flex items-center justify-between px-2.5 py-1.5 rounded-xl"
          style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30` }}
        >
          <span style={{ color: DIM, fontSize: 9 }}>Today logged</span>
          <span style={{ color: ACCENT, fontSize: 11, fontWeight: 700 }}>{loggedCount} / {symptoms.length}</span>
        </div>

        {symptoms.map(({ id, label, logged, severity }) => (
          <button
            key={id}
            onClick={() => toggleSymptom(id)}
            className="flex items-center gap-2 px-2.5 py-2 rounded-xl transition-opacity active:opacity-70"
            style={{ background: CARD_BG, border: `1px solid ${logged ? ACCENT + "44" : CARD_BORDER}` }}
          >
            {logged
              ? <CheckCircle2 size={12} color={ACCENT} />
              : <Circle size={12} color={DIM} />
            }
            <span style={{ flex: 1, textAlign: "left", color: logged ? "#f0f0f5" : DIM, fontSize: 10, fontWeight: 500 }}>
              {label}
            </span>
            {logged && severity !== undefined && (
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 5, height: 5,
                      background: i <= severity ? SEVERITY_COLORS[severity - 1] : "#2a2a3a"
                    }}
                  />
                ))}
              </div>
            )}
          </button>
        ))}

        <button
          onClick={onLog}
          className="flex items-center justify-center gap-1.5 py-2 rounded-xl transition-opacity active:opacity-70 mt-1"
          style={{ background: ACCENT, color: "#fff", fontSize: 10, fontWeight: 600 }}
        >
          <Plus size={10} />
          Quick Log
        </button>

        <button
          onClick={onBack}
          className="py-1.5 rounded-xl text-center transition-opacity active:opacity-70"
          style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT, fontSize: 10, fontWeight: 600 }}
        >
          ← Back
        </button>
      </div>
    </WatchScreen>
  );
}

function CycleScreen({ onBack }: { onBack: () => void }) {
  const phases = [
    { label: "Menstrual", days: "1–5", active: false, color: "#e8749a" },
    { label: "Follicular", days: "6–13", active: false, color: "#a78bfa" },
    { label: "Ovulation", days: "14–16", active: false, color: "#fbbf24" },
    { label: "Luteal", days: "17–28", active: true, color: "#60a5fa" },
  ];
  const cycleDay = 18;
  const totalDays = 28;
  const progress = (cycleDay / totalDays) * 100;

  return (
    <WatchScreen title="Cycle">
      <div className="flex flex-col px-3 pb-3 gap-1.5">
        <div
          className="flex flex-col items-center justify-center py-3 rounded-2xl"
          style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
        >
          <div style={{ color: "#f0f0f5", fontSize: 22, fontWeight: 300, lineHeight: 1 }}>Day {cycleDay}</div>
          <div style={{ color: DIM, fontSize: 9, marginTop: 2 }}>of {totalDays}-day cycle</div>
          <div className="w-full px-4 mt-3">
            <div className="relative h-1.5 rounded-full" style={{ background: "#2a2a3a" }}>
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg, #e8749a, #60a5fa)" }}
              />
            </div>
            <div className="flex justify-between mt-0.5">
              <span style={{ color: DIM, fontSize: 7 }}>Day 1</span>
              <span style={{ color: DIM, fontSize: 7 }}>Day {totalDays}</span>
            </div>
          </div>
          <div className="mt-2 px-2.5 py-1 rounded-full" style={{ background: "#60a5fa20", border: "1px solid #60a5fa44", paddingTop: 0 }}>
            <span style={{ color: "#60a5fa", fontSize: 9, fontWeight: 600 }}>Luteal Phase</span>
          </div>
        </div>

        {phases.map(({ label, days, active, color }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl"
            style={{ background: active ? `${color}18` : CARD_BG, border: `1px solid ${active ? color + "44" : CARD_BORDER}` }}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
            <span style={{ flex: 1, color: active ? "#f0f0f5" : DIM, fontSize: 9.5, fontWeight: active ? 600 : 400 }}>
              {label}
            </span>
            <span style={{ color: DIM, fontSize: 8.5 }}>Days {days}</span>
            {active && (
              <div className="px-1.5 py-0.5 rounded-full" style={{ background: color, color: "#000", fontSize: 7, fontWeight: 700 }}>
                NOW
              </div>
            )}
          </div>
        ))}

        <div
          className="flex items-center gap-2 px-2.5 py-2 rounded-xl"
          style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}25` }}
        >
          <Clock size={10} color={ACCENT} />
          <div>
            <div style={{ color: DIM, fontSize: 8 }}>Next period in</div>
            <div style={{ color: "#f0f0f5", fontSize: 11, fontWeight: 600 }}>10 days</div>
          </div>
          <ChevronRight size={10} color={DIM} style={{ marginLeft: "auto" }} />
        </div>

        <button
          onClick={onBack}
          className="py-1.5 rounded-xl text-center transition-opacity active:opacity-70"
          style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT, fontSize: 10, fontWeight: 600 }}
        >
          ← Back
        </button>
      </div>
    </WatchScreen>
  );
}

function InsightsScreen({ onBack }: { onBack: () => void }) {
  const insights = [
    {
      title: "Pain peaks Day 15–18",
      detail: "Correlates with luteal phase. Consider pre-emptive pain management.",
      icon: TrendingUp,
      color: ACCENT,
    },
    {
      title: "Sleep disrupted",
      detail: "6h 12m this week, down 48 min from baseline.",
      icon: Moon,
      color: "#60a5fa",
    },
    {
      title: "Temp elevated",
      detail: "+0.4°C above baseline since Day 17. Consistent with luteal phase.",
      icon: Thermometer,
      color: "#fb923c",
    },
    {
      title: "Share with provider",
      detail: "Next appt: Jun 12. Tap to prepare report.",
      icon: Heart,
      color: "#34d399",
    },
  ];

  return (
    <WatchScreen title="Insights">
      <div className="flex flex-col px-3 pb-3 gap-1.5">
        {insights.map(({ title, detail, icon: Icon, color }) => (
          <div
            key={title}
            className="px-2.5 py-2 rounded-xl"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Icon size={10} color={color} />
              <span style={{ color: "#f0f0f5", fontSize: 9.5, fontWeight: 600 }}>{title}</span>
            </div>
            <p style={{ color: DIM, fontSize: 8.5, lineHeight: 1.4 }}>{detail}</p>
          </div>
        ))}
        <button
          onClick={onBack}
          className="mt-1 py-1.5 rounded-xl text-center transition-opacity active:opacity-70"
          style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT, fontSize: 10, fontWeight: 600 }}
        >
          ← Back
        </button>
      </div>
    </WatchScreen>
  );
}

function QuickLogScreen({ onBack }: { onBack: () => void }) {
  const [pain, setPain] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(onBack, 1200);
  };

  return (
    <WatchScreen title="Quick Log">
      <div className="flex flex-col px-3 pb-3 gap-2.5">
        {saved ? (
          <div className="flex flex-col items-center justify-center py-8 gap-2">
            <CheckCircle2 size={28} color="#34d399" />
            <span style={{ color: "#34d399", fontSize: 11, fontWeight: 600 }}>Logged!</span>
          </div>
        ) : (
          <>
            <div style={{ color: DIM, fontSize: 9, textAlign: "center" }}>
              {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
            </div>

            <div
              className="px-2.5 py-2.5 rounded-xl"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <div style={{ color: "#c8c8d8", fontSize: 9.5, fontWeight: 600, marginBottom: 8 }}>Pain level</div>
              <div className="flex justify-between gap-0.5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <button
                    key={n}
                    onClick={() => setPain(n)}
                    className="flex-1 rounded flex items-center justify-center transition-opacity active:opacity-70"
                    style={{
                      height: 22,
                      background: n <= pain ? SEVERITY_COLORS[Math.min(Math.floor((pain - 1) / 2), 4)] : "#2a2a3a",
                      fontSize: 7,
                      color: n <= pain ? "#fff" : DIM,
                      fontWeight: 700,
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
              {pain > 0 && (
                <div style={{ color: SEVERITY_COLORS[Math.min(Math.floor((pain - 1) / 2), 4)], fontSize: 9, textAlign: "center", marginTop: 6 }}>
                  {["Minimal", "Mild", "Moderate", "Severe", "Extreme"][Math.min(Math.floor((pain - 1) / 2), 4)]}
                </div>
              )}
            </div>

            <div
              className="px-2.5 py-2 rounded-xl"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <div style={{ color: "#c8c8d8", fontSize: 9.5, fontWeight: 600, marginBottom: 6 }}>Quick symptoms</div>
              <div className="grid grid-cols-2 gap-1">
                {["Cramping", "Bloating", "Fatigue", "Nausea"].map(s => (
                  <div
                    key={s}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg"
                    style={{ background: "#1e1e2e", border: "1px solid #ffffff10" }}
                  >
                    <Circle size={8} color={DIM} />
                    <span style={{ color: DIM, fontSize: 8.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSave}
              className="py-2.5 rounded-xl text-center transition-opacity active:opacity-70"
              style={{ background: ACCENT, color: "#fff", fontSize: 10, fontWeight: 700 }}
            >
              Save Entry
            </button>

            <button
              onClick={onBack}
              className="py-1 text-center"
              style={{ color: DIM, fontSize: 9 }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </WatchScreen>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen onNav={setScreen} />;
      case "biometrics": return <BiometricsScreen onBack={() => setScreen("home")} />;
      case "symptoms": return <SymptomsScreen onBack={() => setScreen("home")} onLog={() => setScreen("log")} />;
      case "cycle": return <CycleScreen onBack={() => setScreen("home")} />;
      case "insights": return <InsightsScreen onBack={() => setScreen("home")} />;
      case "log": return <QuickLogScreen onBack={() => setScreen("symptoms")} />;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4"
      style={{ background: "#0a0a0f", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Heart size={16} color={ACCENT} />
          <h1 style={{ color: "#f0f0f5", fontSize: 20, fontWeight: 300, letterSpacing: "-0.02em" }}>
            Lunarix
          </h1>
        </div>
        <p style={{ color: DIM, fontSize: 11 }}>
          Biometric treatment tracking · Apple Health connected
        </p>
      </div>

      {/* Watch */}
      <WatchShell>
        {renderScreen()}
      </WatchShell>

      {/* Screen nav pills */}
      <div className="mt-8 flex gap-1.5 flex-wrap justify-center">
        {[
          { label: "Home", s: "home" as Screen },
          { label: "Biometrics", s: "biometrics" as Screen },
          { label: "Symptoms", s: "symptoms" as Screen },
          { label: "Cycle", s: "cycle" as Screen },
          { label: "Insights", s: "insights" as Screen },
        ].map(({ label, s }) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            className="px-3 py-1.5 rounded-lg transition-opacity hover:opacity-80"
            style={{
              background: screen === s ? ACCENT : CARD_BG,
              border: `1px solid ${screen === s ? ACCENT : CARD_BORDER}`,
              color: screen === s ? "#fff" : DIM,
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Feature list */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 max-w-xs w-full">
        {[
          { icon: Heart, label: "Apple Health sync", color: "#e8749a" },
          { icon: Activity, label: "Live biometrics", color: "#a78bfa" },
          { icon: Calendar, label: "Cycle tracking", color: "#60a5fa" },
          { icon: TrendingUp, label: "AI-powered insights", color: "#34d399" },
        ].map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={11} color={color} />
            <span style={{ color: DIM, fontSize: 10 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
