import { AlertCircle, Stethoscope, Pill, Info } from "lucide-react";
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    faPeopleGroup,
    faBrain,
    faChartColumn,
    faMoon,
    faBookOpen
} from '@fortawesome/free-solid-svg-icons';


export function OnasPage() {
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
            O nas ✨
          </h1>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
              Lunarix narodził się podczas hackathonu, ale jego fundamentem jest realny i często pomijany problem — niska świadomość chorób hormonalnych u kobiet.
              Chcemy nie tylko edukować, ale też wspierać w profilaktyce i pomagać zrozumieć, kiedy i gdzie szukać profesjonalnej pomocy.
          </h2>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Kim jesteśmy?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
              Cześć! Lunarix to nie tylko projekt technologiczny, ale przede wszystkim ludzie stojący za jego misją. Tworzy nas zespół 5 studentek informatyki, które łączą wiedzę technologiczną z pasją do zdrowia kobiet i AI.
              Naszym celem jest rozwój produktu we współpracy z lekarzami oraz budowa społeczności „Luny”, która wspiera edukację i świadomość w obszarze zdrowia hormonalnego.
          </p>
        </section>

        {/* Symptoms */}
          <section>
              <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.9rem",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
              }}>
                  Dlaczego Lunarix?
              </h2>

              <div className="space-y-4">
                  {[
                      {
                          icon: faPeopleGroup,
                          text: "Tworzone przez kobiety dla kobiet – rozumiemy, jak wygląda realne doświadczenie objawów, które często są ignorowane lub bagatelizowane"
                      },
                      {
                          icon: faBrain,
                          text: "Łączymy dane i edukację – zamiast chaosu objawów pokazujemy uporządkowany obraz zdrowia hormonalnego"
                      },
                      {
                          icon: faChartColumn,
                          text: "Wykorzystujemy dane z Apple Health, Flo i wearable devices, aby wykrywać zmiany w czasie"
                      },
                      {
                          icon: faMoon,
                          text: "Skupiamy się na chorobach, które dotykają milionów kobiet: PCOS, endometrioza i choroby tarczycy"
                      },
                      {
                          icon: faBookOpen,
                          text: "Bazujemy na wiedzy naukowej, nie opiniach – każda informacja ma swoje źródło"
                      }
                  ].map((item,index) => (
                      <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl px-4 py-3"
                          style={{
                              background: "rgba(193,125,224,0.1)",
                              border: "1px solid rgba(193,125,224,0.2)",
                          }}
                      >
                          {/*<span style={{ color: "#c17de0", marginTop: "2px" }}>✦</span>*/}
                          <div style={{ color: "#e2deea", marginTop: "3px", minWidth: "20px", textAlign: "center" }}>
                              <FontAwesomeIcon icon={item.icon} />
                          </div>
                          <span
                              style={{
                                  fontFamily: "'Nunito', sans-serif",
                                  color: "#DFD9FF",
                                  fontSize: "0.95rem",
                                  lineHeight: 1.6,
                              }}
                          >
          {item.text}
        </span>
                      </div>
                  ))}
              </div>
          </section>
          <section>
              <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.9rem",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
              }}>
                  Kontakt
              </h2>

              <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.75)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  marginBottom: "1.5rem",
              }}>
                  Chcemy budować Lunarix razem z kobietami, lekarzami i społecznością „Luny”.
                  Jeśli chcesz z nami współpracować, wesprzeć projekt lub po prostu być częścią tej misji — odezwij się.
              </p>
              <h2>

              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Sekcja Email */}
                  <div
                      className="flex items-center justify-center gap-2 rounded-xl px-4 py-3"
                      style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(223,217,255,0.1)",
                          color: "#DFD9FF",
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "0.95rem",
                      }}
                  >
                      <FontAwesomeIcon icon={faEnvelope} />
                      email: contact.cltcoding@gmail.com
                  </div>

                  {/* Sekcja Instagram */}
                  <a
                      href="https://www.instagram.com/clt_coding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 transition-opacity hover:opacity-80"
                      style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(223,217,255,0.1)",
                          color: "#DFD9FF",
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "0.95rem",
                          textDecoration: "none",
                      }}
                  >
                      <FontAwesomeIcon icon={faInstagram} />
                      Instagram
                  </a>
              </div>
          </section>
      </div>
    </div>
  );
}
