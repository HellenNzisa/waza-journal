// src/components/Header.jsx
import { useNavigate, useLocation } from "react-router-dom";

const COLORS = {
  forest: "#283618",
  cream: "#fefae0",
  gold: "#dda15e",
  clay: "#bc6c25",
};

// Waza leaf-mark SVG logo
function WazaLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Outer leaf shape */}
      <path
        d="M16 3C10 3 4 9 4 17C4 23 8.5 28 16 29C23.5 28 28 23 28 17C28 9 22 3 16 3Z"
        fill="#dda15e"
        opacity="0.18"
      />
      {/* Inner leaf veins */}
      <path
        d="M16 6C16 6 10 12 10 19C10 23 12.8 26.5 16 27.5"
        stroke="#dda15e"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M16 6C16 6 22 12 22 19C22 23 19.2 26.5 16 27.5"
        stroke="#dda15e"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Centre stem */}
      <line
        x1="16"
        y1="6"
        x2="16"
        y2="27.5"
        stroke="#dda15e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Cross veins */}
      <line x1="16" y1="13" x2="12" y2="16" stroke="#dda15e" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="13" x2="20" y2="16" stroke="#dda15e" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="18" x2="12.5" y2="21" stroke="#dda15e" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="18" x2="19.5" y2="21" stroke="#dda15e" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function Header({ transparent = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  // On landing, header is overlaid on the hero image — keep it transparent.
  // On inner pages, show a solid forest background.
  const bgStyle = transparent || isLanding
    ? {
        background: "transparent",
        borderBottom: "1px solid rgba(221,161,94,0.12)",
      }
    : {
        background: COLORS.forest,
        borderBottom: "1px solid rgba(221,161,94,0.18)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.25)",
      };

  return (
    <header
      style={{
        position: isLanding ? "absolute" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        transition: "background 0.3s ease",
        ...bgStyle,
      }}
    >
      {/* ── Logo + Wordmark ── */}
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <WazaLogo />
        <span
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.45rem",
            letterSpacing: "0.14em",
            color: COLORS.gold,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Waza
        </span>
      </button>

      {/* ── Nav Buttons ── */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            background: "transparent",
            border: "1.5px solid rgba(221,161,94,0.45)",
            color: COLORS.gold,
            padding: "9px 22px",
            borderRadius: "100px",
            cursor: "pointer",
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.86rem",
            letterSpacing: "0.04em",
            transition: "all 0.22s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(221,161,94,0.12)";
            e.target.style.borderColor = COLORS.gold;
            e.target.style.color = COLORS.cream;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.borderColor = "rgba(221,161,94,0.45)";
            e.target.style.color = COLORS.gold;
          }}
        >
          Log in
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={{
            background: COLORS.gold,
            border: "none",
            color: COLORS.forest,
            padding: "9px 22px",
            borderRadius: "100px",
            cursor: "pointer",
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.86rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            transition: "all 0.22s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = COLORS.clay;
            e.target.style.color = COLORS.cream;
            e.target.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = COLORS.gold;
            e.target.style.color = COLORS.forest;
            e.target.style.transform = "scale(1)";
          }}
        >
          Begin →
        </button>
      </div>
    </header>
  );
}
