import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Tab } from "../App";

interface NavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "home", label: "Main Page" },
  { id: "o-nas", label: "About us" },
  { id: "choroby", label: "Conditions" },
  { id: "profilaktyka", label: "Prevention" },
  { id: "badania", label: "Tests" },
  { id: "aplikacja", label: "The App" },
];

export function Nav({ activeTab, onTabChange }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "rgba(55, 40, 100, 0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(223,217,255,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={() => onTabChange("home")}
          className="flex items-center gap-2 group"
        >
          <Moon
            className="w-5 h-5 transition-transform group-hover:rotate-12"
            style={{ color: "#DFD9FF" }}
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}
          >
            Lunarix
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:opacity-100"
              style={{
                color:
                  activeTab === tab.id ? "#493780" : "rgba(223,217,255,0.72)",
                background: activeTab === tab.id ? "#DFD9FF" : "transparent",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: activeTab === tab.id ? 700 : 500,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#DFD9FF" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-2 pt-4 mt-4"
          style={{ borderTop: "1px solid rgba(223,217,255,0.1)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                setMenuOpen(false);
              }}
              className="text-left px-4 py-3 rounded-xl transition-all duration-200"
              style={{
                color: activeTab === tab.id ? "#493780" : "#DFD9FF",
                background:
                  activeTab === tab.id ? "#DFD9FF" : "rgba(255,255,255,0.05)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
