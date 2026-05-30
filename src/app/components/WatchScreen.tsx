import { ReactNode } from "react";

interface WatchScreenProps {
  children: ReactNode;
  title?: string;
}

export function WatchShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-background">
      <div className="relative">
        {/* Watch body */}
        <div
          className="relative rounded-[44px] overflow-hidden"
          style={{
            width: 198,
            height: 242,
            background: "#1a1a1a",
            boxShadow: "0 0 0 2px #2a2a2a, 0 0 0 4px #111, 0 24px 64px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Screen bezel */}
          <div
            className="absolute inset-0 rounded-[44px] overflow-hidden"
            style={{ background: "#000" }}
          >
            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-background">
              {children}
            </div>
          </div>
        </div>
        {/* Digital Crown */}
        <div
          className="absolute right-[-8px] top-[72px] rounded-[3px]"
          style={{
            width: 8,
            height: 32,
            background: "linear-gradient(180deg, #3a3a3a, #222)",
            boxShadow: "2px 0 4px rgba(0,0,0,0.4)",
          }}
        />
        {/* Side button */}
        <div
          className="absolute right-[-8px] top-[116px] rounded-[3px]"
          style={{
            width: 8,
            height: 20,
            background: "linear-gradient(180deg, #3a3a3a, #222)",
            boxShadow: "2px 0 4px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export function WatchScreen({ children, title }: WatchScreenProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif" }}>
      {title && (
        <div className="px-4 pt-3 pb-1 flex-shrink-0">
          <span style={{ color: "#e8749a", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {title}
          </span>
        </div>
      )}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {children}
      </div>
    </div>
  );
}
