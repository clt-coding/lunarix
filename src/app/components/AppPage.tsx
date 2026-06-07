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
        title: "Cycle Calendar",
        desc: "Track your menstrual cycle and predict upcoming phases with the help of personalized algorithms.",
        color: "#c17de0",
    },
    {
        icon: Activity,
        title: "Biometric Monitoring",
        desc: "Log your heart rate, weight, body temperature, blood pressure, and other health indicators every day.",
        color: "#8cb8f0",
    },
    {
        icon: Bell,
        title: "Medication Reminders",
        desc: "Smart reminders for medication doses, routine check-ups, and doctor appointments.",
        color: "#80d9b4",
    },
    {
        icon: FileText,
        title: "Doctor Reports",
        desc: "Generate comprehensive health reports ready to share with your endocrinologist or gynecologist.",
        color: "#f0b88c",
    },
    {
        icon: Shield,
        title: "Data Security",
        desc: "Your health data is encrypted end-to-end and is never shared with third parties.",
        color: "#e87d9a",
    },
    {
        icon: Users,
        title: "Women's Community",
        desc: "Join hundreds of women who understand your health challenges and support each other.",
        color: "#a8d8a8",
    },
];

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
                  Coming soon to App Store and Google Play
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
                  An app designed
                <br />
                <span style={{ color: "#DFD9FF" }}>just for you</span>
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
                  Lunarix is the first health tracking app specifically designed
                  for women dealing with endometriosis, PCOS, and thyroid conditions.
                  Track your symptoms, biometrics, and cycle – all in one place.
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
                  <img src="/assets/images/Apple_logo_black.svg" alt="apple" width="30" height="30" />
                  <div className="text-left">
                    <div style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>
                      Soon on the
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
                      Soon on the
                    </div>
                    <div style={{ fontSize: "1rem" }}>Google Play</div>
                  </div>
                </button>
              </div>

              
            </div>

            {/* Phone */}
            <div className="flex justify-center">
              <img src="/assets/images/phone.png" alt="phone" height="600" width="300" style={{ border: "5px black solid", borderRadius: "35px" }} />
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
              Everything you need
          </h2>
          <p
            className="text-center mb-14"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.6)",
              fontSize: "1.05rem",
            }}
          >
              Features designed specifically for women with chronic conditions
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

      
    </div>
  );
}
