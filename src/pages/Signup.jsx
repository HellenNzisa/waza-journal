// src/pages/Signup.jsx
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const COLORS = {
  forest: "#283618",
  darkGreen: "#606c38",
  cream: "#fefae0",
  gold: "#dda15e",
  clay: "#bc6c25",
};

const prompts = [
  "Every great journey begins with a single word.",
  "Your thoughts deserve a home.",
  "This is your space. No judgment, only growth.",
  "Clarity lives just on the other side of the page.",
];

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message.replace("Firebase: ", "").replace(/\(auth\/.*\)/, "").trim());
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focusedField === field
      ? "rgba(254,250,224,0.09)"
      : "rgba(254,250,224,0.04)",
    border: focusedField === field
      ? `1.5px solid rgba(221,161,94,0.7)`
      : `1.5px solid rgba(254,250,224,0.14)`,
    borderRadius: "12px",
    padding: "16px 20px",
    color: COLORS.cream,
    fontFamily: "'Circular', 'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.25s ease",
    boxSizing: "border-box",
    caretColor: COLORS.gold,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.forest,
        display: "flex",
        fontFamily: "'Circular', 'DM Sans', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        input::placeholder { color: rgba(254,250,224,0.3); }
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #2e3f1a inset !important;
          -webkit-text-fill-color: #fefae0 !important;
          transition: background-color 5000s;
        }
      `}</style>

      {/* Left decorative panel — hidden on small screens via inline media workaround */}
      <div
        style={{
          flex: "0 0 42%",
          background: COLORS.darkGreen,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 48px",
          position: "relative",
          overflow: "hidden",
        }}
        className="waza-left-panel"
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", bottom: "-80px", right: "-80px",
          width: "340px", height: "340px", borderRadius: "50%",
          border: "1px solid rgba(254,250,224,0.07)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20px", right: "-20px",
          width: "200px", height: "200px", borderRadius: "50%",
          border: "1px solid rgba(254,250,224,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "-60px",
          width: "180px", height: "180px", borderRadius: "50%",
          border: "1px solid rgba(221,161,94,0.08)", pointerEvents: "none",
        }} />

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          style={{
            fontFamily: "'Quincy CF', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: COLORS.cream,
            cursor: "pointer",
            position: "relative",
            zIndex: 1,
          }}
        >
          Waza
        </div>

        {/* Middle quote */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'Quincy CF', Georgia, serif",
              fontSize: "3.5rem",
              color: "rgba(221,161,94,0.2)",
              lineHeight: 1,
              marginBottom: "-12px",
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily: "'Quincy CF', Georgia, serif",
              fontSize: "1.35rem",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(254,250,224,0.75)",
              lineHeight: 1.55,
              margin: "0 0 24px",
            }}
          >
            {prompts[Math.floor(Math.random() * prompts.length)]}
          </p>
          <div
            style={{
              width: "36px",
              height: "2px",
              background: COLORS.gold,
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Step indicators */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {["Create account", "Set your intentions", "Begin writing"].map((step, i) => (
            <div
              key={step}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: i < 2 ? "16px" : "0",
                opacity: i === 0 ? 1 : 0.4,
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: i === 0 ? COLORS.gold : "transparent",
                  border: i === 0 ? "none" : "1.5px solid rgba(254,250,224,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: i === 0 ? COLORS.forest : "rgba(254,250,224,0.4)",
                  flexShrink: 0,
                }}
              >
                {i === 0 ? "●" : i + 1}
              </div>
              <span
                style={{
                  fontSize: "0.88rem",
                  color: i === 0 ? COLORS.cream : "rgba(254,250,224,0.4)",
                  fontWeight: i === 0 ? 500 : 400,
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Form panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "48px 40px",
          animation: "fadeUp 0.55s ease both",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          {/* Header */}
          <h2
            style={{
              fontFamily: "'Quincy CF', Georgia, serif",
              fontWeight: 700,
              fontSize: "2.2rem",
              color: COLORS.cream,
              margin: "0 0 8px",
              lineHeight: 1.15,
            }}
          >
            Begin your journey.
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(254,250,224,0.5)",
              margin: "0 0 40px",
              lineHeight: 1.6,
            }}
          >
            Create a free account and start writing today.
          </p>

          {/* Error message */}
          {error && (
            <div
              style={{
                background: "rgba(188, 108, 37, 0.15)",
                border: "1px solid rgba(188,108,37,0.4)",
                borderRadius: "10px",
                padding: "12px 16px",
                marginBottom: "20px",
                fontSize: "0.85rem",
                color: COLORS.gold,
                animation: "fadeUp 0.3s ease both",
              }}
            >
              {error}
            </div>
          )}

          {/* Form — no <form> tag per guidelines, use div + button onClick */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Email label + input */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(254,250,224,0.45)",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                style={inputStyle("email")}
                required
              />
            </div>

            {/* Password label + input */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(254,250,224,0.45)",
                  marginBottom: "8px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                onKeyDown={(e) => e.key === "Enter" && handleSignup(e)}
                style={inputStyle("password")}
                required
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSignup}
              disabled={loading}
              style={{
                marginTop: "8px",
                width: "100%",
                background: loading
                  ? "rgba(221,161,94,0.5)"
                  : COLORS.gold,
                border: "none",
                borderRadius: "12px",
                padding: "16px",
                color: COLORS.forest,
                fontFamily: "'Circular', sans-serif",
                fontSize: "0.97rem",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                letterSpacing: "0.03em",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = COLORS.clay;
                  e.target.style.color = COLORS.cream;
                  e.target.style.transform = "translateY(-1px)";
                  e.target.style.boxShadow = "0 8px 24px rgba(221,161,94,0.3)";
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.background = COLORS.gold;
                  e.target.style.color = COLORS.forest;
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }
              }}
            >
              {loading ? "Creating your space…" : "Create Account →"}
            </button>
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "rgba(254,250,224,0.1)" }} />
            <span style={{ fontSize: "0.75rem", color: "rgba(254,250,224,0.3)" }}>
              already a member?
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(254,250,224,0.1)" }} />
          </div>

          {/* Login link */}
          <button
            onClick={() => navigate("/login")}
            style={{
              width: "100%",
              background: "transparent",
              border: "1.5px solid rgba(254,250,224,0.14)",
              borderRadius: "12px",
              padding: "14px",
              color: "rgba(254,250,224,0.65)",
              fontFamily: "'Circular', sans-serif",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(254,250,224,0.35)";
              e.target.style.color = COLORS.cream;
              e.target.style.background = "rgba(254,250,224,0.04)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(254,250,224,0.14)";
              e.target.style.color = "rgba(254,250,224,0.65)";
              e.target.style.background = "transparent";
            }}
          >
            Log in instead
          </button>
        </div>
      </div>
    </div>
  );
}
