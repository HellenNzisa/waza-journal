// src/pages/Login.jsx
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const COLORS = {
  forest: "#283618",
  darkGreen: "#606c38",
  cream: "#fefae0",
  gold: "#dda15e",
  clay: "#bc6c25",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e?.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      const msg = err.message || "";
      if (msg.includes("user-not-found") || msg.includes("wrong-password") || msg.includes("invalid-credential")) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError(msg.replace("Firebase: ", "").replace(/\(auth\/.*\)/, "").trim());
      }
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
        input::placeholder { color: rgba(254,250,224,0.3); }
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #2e3f1a inset !important;
          -webkit-text-fill-color: #fefae0 !important;
          transition: background-color 5000s;
        }
      `}</style>

      {/* Left decorative panel */}
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
      >
        {/* Decorative organic shapes */}
        <div style={{
          position: "absolute", top: "-60px", left: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          border: "1px solid rgba(221,161,94,0.07)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "10px", left: "10px",
          width: "180px", height: "180px", borderRadius: "50%",
          border: "1px solid rgba(221,161,94,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", right: "-60px",
          width: "260px", height: "260px", borderRadius: "50%",
          border: "1px solid rgba(254,250,224,0.06)", pointerEvents: "none",
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

        {/* Welcome back message */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: COLORS.gold,
              borderRadius: "2px",
              marginBottom: "24px",
            }}
          />
          <h3
            style={{
              fontFamily: "'Quincy CF', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: COLORS.cream,
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            Welcome back.
          </h3>
          <p
            style={{
              fontFamily: "'Circular', sans-serif",
              fontSize: "0.92rem",
              color: "rgba(254,250,224,0.6)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "280px",
            }}
          >
            Your journal has been waiting. Your thoughts, your goals, your
            growth — all right where you left them.
          </p>
        </div>

        {/* Bottom feature hints */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { icon: "✦", text: "Daily reflection prompts" },
            { icon: "◎", text: "Goal tracking & intentions" },
            { icon: "⟁", text: "SOS support, always nearby" },
          ].map((item) => (
            <div
              key={item.text}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <span style={{ color: COLORS.gold, fontSize: "0.85rem" }}>{item.icon}</span>
              <span
                style={{
                  fontSize: "0.83rem",
                  color: "rgba(254,250,224,0.5)",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Form */}
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
            Good to see you.
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(254,250,224,0.5)",
              margin: "0 0 40px",
              lineHeight: 1.6,
            }}
          >
            Log in to continue your journey.
          </p>

          {/* Error */}
          {error && (
            <div
              style={{
                background: "rgba(188,108,37,0.15)",
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

          {/* Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
              />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <label
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(254,250,224,0.45)",
                  }}
                >
                  Password
                </label>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(221,161,94,0.7)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(221,161,94,0.7)")}
                >
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={inputStyle("password")}
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                marginTop: "8px",
                width: "100%",
                background: loading ? "rgba(221,161,94,0.5)" : COLORS.gold,
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
              {loading ? "Opening your journal…" : "Log In →"}
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
              new here?
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(254,250,224,0.1)" }} />
          </div>

          {/* Signup link */}
          <button
            onClick={() => navigate("/signup")}
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
            Create a free account
          </button>
        </div>
      </div>
    </div>
  );
}
