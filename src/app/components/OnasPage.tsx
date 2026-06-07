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
              About us ✨
          </h1>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
              Lunarix was born during a hackathon, but its foundation lies in a real and often overlooked problem — low awareness of hormonal diseases in women.
              We want to not only educate but also support prevention and help women understand when and where to seek professional help.
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
              Who are we?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "rgba(223,217,255,0.75)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
              Hi there! Lunarix is not just a technological project, but above all, the people behind its mission. We are a team of 5 female computer science students who combine technical knowledge with a passion for women's health and AI.
              Our goal is to develop the product in cooperation with medical doctors and to build the "Luna" community, which supports education and awareness in the field of hormonal health.
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
                  Why Lunarix?
              </h2>

              <div className="space-y-4">
                  {[
                      {
                          icon: faPeopleGroup,
                          text: "Created by women for women – we understand the actual experience of symptoms that are frequently ignored or downplayed"
                      },
                      {
                          icon: faBrain,
                          text: "We combine data and education – instead of symptomatic chaos, we present an organized picture of hormonal health"
                      },
                      {
                          icon: faChartColumn,
                          text: "We leverage data from Apple Health, Flo, and wearables to detect changes over time"
                      },
                      {
                          icon: faMoon,
                          text: "We focus on diseases that affect millions of women: PCOS, endometriosis, and thyroid conditions"
                      },
                      {
                          icon: faBookOpen,
                          text: "We rely on scientific knowledge, not opinions – every piece of information is backed by a source"
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
                  Contact
              </h2>

              <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(223,217,255,0.75)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  marginBottom: "1.5rem",
              }}>
                  We want to build Lunarix together with women, doctors, and the "Luna" community.
                  If you want to collaborate with us, support the project, or simply be a part of this mission — get in touch.
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
