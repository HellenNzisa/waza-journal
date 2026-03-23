// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/naturebackground.jpg";

const COLORS = {
  darkGreen: "#121701",
  forest: "#283618",
  cream: "#fefae0",
  gold: "#dda15e",
  clay: "#bc6c25",
};

const prompts = [
  "What made you smile today?",
  "What are you grateful for right now?",
  "What's one thing you'd like to let go of?",
  "Where do you feel most at peace?",
  "What does growth look like for you today?",
  "What intention will carry you through this week?",
];

const stats = [
  { value: "10K+", label: "Reflections written" },
  { value: "94%", label: "Feel more grounded" },
  { value: "Daily", label: "New prompts & insights" },
];

const features = [
  {
    icon: "✦",
    title: "Daily Prompts",
    desc: "Thoughtfully crafted questions that meet you where you are — guiding you from scattered thoughts to grounded clarity.",
  },
  {
    icon: "◎",
    title: "Goal Setting",
    desc: "Set intentions that feel alive. Break them into small, meaningful steps and watch your direction become your identity.",
  },
  {
    icon: "⟁",
    title: "SOS Support",
    desc: "Mental health is never optional. Waza keeps trusted contacts and resources a single tap away, always.",
  },
  {
    icon: "◈",
    title: "Daily Recaps",
    desc: "Look back to move forward. Each evening, revisit your day with compassion and celebrate your small wins.",
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const [promptIdx, setPromptIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPromptIdx((i) => (i + 1) % prompts.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.forest,
        color: COLORS.cream,
        fontFamily: "'Quincy CF', Georgia, serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50%       { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(221,161,94,0); }
          50%       { box-shadow: 0 0 32px 8px rgba(221,161,94,0.16); }
        }
      `}</style>

      {/* ━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━ */}
      <div
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Parallax background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.35}px) scale(1.12)`,
            transition: "transform 0.05s linear",
            zIndex: 0,
          }}
        />

        {/* Deep vignette so text is always readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to bottom,
              rgba(28,38,18,0.65) 0%,
              rgba(28,38,18,0.38) 35%,
              rgba(28,38,18,0.80) 80%,
              rgba(28,38,18,1)   100%
            )`,
            zIndex: 1,
          }}
        />

        {/* Grain texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            zIndex: 2,
            opacity: 0.55,
            pointerEvents: "none",
          }}
        />

        {/* Hero content — top padding leaves room for the absolute-positioned Header */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 24px 96px",
          }}
        >
          
          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Quincy CF', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(3.2rem, 8.5vw, 7rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: COLORS.cream,
              margin: "0 0 18px",
              maxWidth: "820px",
              textShadow: "0 2px 28px rgba(0,0,0,0.6)",
            }}
          >
            Come home
            <br />
            <span style={{ color: "#dda15e" }}>to yourself.</span>
          </h1>

          {/* Sub-headline — boosted opacity for readability */}
          <p
            style={{
              fontFamily: "'Circular', 'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2.4vw, 1.2rem)",
              lineHeight: 1.72,
              color: "rgba(254,250,224,0.9)",
              maxWidth: "500px",
              margin: "0 0 52px",
              fontWeight: 300,
              textShadow: "0 1px 12px rgba(0,0,0,0.55)",
            }}
          >
            Waza is a gentle journaling space for reflection, honest
            goal‑setting, and the kind of growth that actually lasts.
          </p>

          {/* Rotating prompt card */}
          <div
            style={{
              background: "rgba(40,54,24,0.75)",
              backdropFilter: "blur(18px)",
              border: "1.5px solid rgba(221,161,94,0.42)",
              borderRadius: "18px",
              padding: "24px 34px",
              maxWidth: "460px",
              width: "100%",
              marginBottom: "48px",
              animation: "goldPulse 5s ease-in-out infinite",
            }}
          >
            <div
              style={{
                fontFamily: "'Circular', 'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#dda15e",
                marginBottom: "11px",
                fontWeight: 600,
              }}
            >
              ✦ Today's prompt
            </div>
            <div
              style={{
                fontFamily: "'Quincy CF', Georgia, serif",
                fontSize: "1.13rem",
                color: COLORS.cream,
                lineHeight: 1.55,
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(6px)" : "translateY(0)",
                fontStyle: "italic",
              }}
            >
              "{prompts[promptIdx]}"
            </div>
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => navigate("/signup")}
              style={{
                background: "#dda15e",
                border: "none",
                color: COLORS.forest,
                padding: "16px 42px",
                borderRadius: "100px",
                cursor: "pointer",
                fontFamily: "'Circular', 'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 24px rgba(221,161,94,0.38)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = COLORS.clay;
                e.target.style.color = COLORS.cream;
                e.target.style.transform = "translateY(-2px) scale(1.03)";
                e.target.style.boxShadow = "0 12px 36px rgba(221,161,94,0.48)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#dda15e";
                e.target.style.color = COLORS.forest;
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 4px 24px rgba(221,161,94,0.38)";
              }}
            >
              Start journaling — it's free
            </button>
            <button
              onClick={() => navigate("/login")}
              style={{
                background: "transparent",
                border: "1.5px solid rgba(221,161,94,0.52)",
                color: "#dda15e",
                padding: "16px 42px",
                borderRadius: "100px",
                cursor: "pointer",
                fontFamily: "'Circular', 'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(221,161,94,0.14)";
                e.target.style.borderColor = "#dda15e";
                e.target.style.color = COLORS.cream;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "rgba(221,161,94,0.52)";
                e.target.style.color = "#dda15e";
              }}
            >
              I have an account
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "bounce 2.2s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "38px",
              background: "linear-gradient(to bottom, #dda15e, transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'Circular', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(221,161,94,0.7)",
            }}
          >
            Explore
          </span>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━ STATS BAR ━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background: COLORS.darkGreen,
          borderTop: "1px solid rgba(221,161,94,0.22)",
          borderBottom: "1px solid rgba(221,161,94,0.22)",
          padding: "52px 48px",
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Quincy CF', Georgia, serif",
                fontSize: "3rem",
                fontWeight: 700,
                color: "#dda15e",
                lineHeight: 1,
                marginBottom: "10px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "'Circular', 'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(254,250,224,0.75)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━ FEATURES ━━━━━━━━━━━━━━━ */}
      <div style={{ background: COLORS.forest, padding: "100px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "'Circular', 'DM Sans', sans-serif",
                fontSize: "0.76rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#dda15e",
                marginBottom: "14px",
                fontWeight: 600,
              }}
            >
              Everything you need
            </p>
            <h2
              style={{
                fontFamily: "'Quincy CF', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 700,
                color: COLORS.cream,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Your whole inner world,
              <br />
              <span style={{ color: "#dda15e" }}>in one place.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                onClick={() => setActiveFeature(i)}
                style={{
                  background:
                    activeFeature === i
                      ? "rgba(221,161,94,0.14)"
                      : "rgba(254,250,224,0.04)",
                  border:
                    activeFeature === i
                      ? "1.5px solid rgba(221,161,94,0.6)"
                      : "1.5px solid rgba(221,161,94,0.13)",
                  borderRadius: "20px",
                  padding: "36px 28px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: activeFeature === i ? "translateY(-4px)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeFeature !== i) {
                    e.currentTarget.style.background = "rgba(221,161,94,0.07)";
                    e.currentTarget.style.borderColor = "rgba(221,161,94,0.32)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFeature !== i) {
                    e.currentTarget.style.background = "rgba(254,250,224,0.04)";
                    e.currentTarget.style.borderColor = "rgba(221,161,94,0.13)";
                    e.currentTarget.style.transform = "none";
                  }
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(221,161,94,0.16)",
                    border: "1px solid rgba(221,161,94,0.32)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "#dda15e",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Quincy CF', Georgia, serif",
                    fontSize: "1.22rem",
                    fontWeight: 700,
                    color: activeFeature === i ? "#dda15e" : COLORS.cream,
                    margin: "0 0 12px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Circular', 'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.72,
                    color: "rgba(254,250,224,0.7)",
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━ QUOTE ━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background: COLORS.darkGreen,
          borderTop: "1px solid rgba(221,161,94,0.15)",
          borderBottom: "1px solid rgba(221,161,94,0.15)",
          padding: "100px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'Quincy CF', Georgia, serif",
            fontSize: "22rem",
            fontWeight: 900,
            color: "rgba(221,161,94,0.06)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          "
        </div>
        <div
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: COLORS.cream,
            maxWidth: "680px",
            margin: "0 auto 24px",
            lineHeight: 1.48,
            position: "relative",
            zIndex: 1,
          }}
        >
          "The unexamined life is not worth living — but the examined life is
          one worth celebrating."
        </div>
        <div
          style={{
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.84rem",
            color: "#dda15e",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
            position: "relative",
            zIndex: 1,
          }}
        >
          — Waza philosophy
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background: COLORS.forest,
          padding: "120px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(221,161,94,0.13) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.76rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#dda15e",
            marginBottom: "18px",
            position: "relative",
            fontWeight: 600,
          }}
        >
          Take the first step
        </p>
        <h2
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            fontWeight: 700,
            color: COLORS.cream,
            lineHeight: 1.1,
            margin: "0 0 8px",
            position: "relative",
          }}
        >
          Your story
        </h2>
        <h2
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            fontWeight: 700,
            color: "#dda15e",
            lineHeight: 1.1,
            margin: "0 0 52px",
            position: "relative",
          }}
        >
          deserves space.
        </h2>
        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "#dda15e",
            border: "none",
            color: COLORS.forest,
            padding: "18px 58px",
            borderRadius: "100px",
            cursor: "pointer",
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            transition: "all 0.3s ease",
            position: "relative",
            boxShadow: "0 6px 28px rgba(221,161,94,0.34)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = COLORS.clay;
            e.target.style.color = COLORS.cream;
            e.target.style.transform = "translateY(-3px) scale(1.04)";
            e.target.style.boxShadow = "0 16px 44px rgba(221,161,94,0.44)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#dda15e";
            e.target.style.color = COLORS.forest;
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 6px 28px rgba(221,161,94,0.34)";
          }}
        >
          Open Waza — it's free
        </button>
        <p
          style={{
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(221,161,94,0.52)",
            marginTop: "22px",
            position: "relative",
          }}
        >
          No credit card. No pressure. Just you.
        </p>
      </div>

      {/* ━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background: COLORS.forest,
          borderTop: "1px solid rgba(221,161,94,0.14)",
          padding: "32px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            color: "rgba(221,161,94,0.55)",
            textTransform: "uppercase",
          }}
        >
          Waza
        </div>
        <div
          style={{
            fontFamily: "'Circular', 'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(254,250,224,0.35)",
          }}
        >
          A safe space for the examined life.
        </div>
      </div>
    </div>
  );
}
