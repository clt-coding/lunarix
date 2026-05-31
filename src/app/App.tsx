import { useState } from "react";
import { Nav } from "./components/Nav";
import { HomePage } from "./components/HomePage";
import { OnasPage } from "./components/OnasPage";
import { ChorobyPage } from "./components/ChorobyPage";
import { ProfilaktykaPage } from "./components/ProfilaktykaPage";
import { AppPage } from "./components/AppPage";
import BadaniaPage from "./components/BadaniaPage";

export type Tab = "home" | "o-nas" | "choroby" | "profilaktyka" | "badania" | "aplikacja";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#493780",
        color: "#DFD9FF",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <Nav activeTab={activeTab} onTabChange={handleTabChange} />

      <main>
        {activeTab === "home" && (
          <HomePage onTabChange={handleTabChange} />
        )}
        {activeTab === "o-nas" && <OnasPage />}
        {activeTab === "choroby" && <ChorobyPage />}
        {activeTab === "profilaktyka" && <ProfilaktykaPage />}
        {activeTab === "badania" && <BadaniaPage />}
        {activeTab === "aplikacja" && <AppPage />}
      </main>

      {/* Footer */}
      <footer
        className="px-6 py-10 text-center"
        style={{
          borderTop: "1px solid rgba(223,217,255,0.1)",
          background: "rgba(0,0,0,0.15)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span style={{ fontSize: "1.2rem" }}>🌙</span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Lunarix
          </span>
        </div>
        <p
          style={{
            color: "rgba(223,217,255,0.4)",
            fontSize: "0.85rem",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          © 2026 Lunarix. Made with love by clt_coding ♥. Treści mają charakter wyłącznie informacyjny – nie
          zastępują porady medycznej.
        </p>
      </footer>
    </div>
  );
}
