// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles/colours"; // fixed filename

function Dashboard() {
  const navigate = useNavigate();

  const buttonStylePrimary = {
    backgroundColor: COLORS.darkGreen,
    color: COLORS.cream,
    padding: "15px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Circular, Quincy CF, sans-serif",
    transition: "background 0.3s",
  };

  const buttonStyleSecondary = {
    backgroundColor: COLORS.gold,
    color: COLORS.forest,
    padding: "15px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Circular, Quincy CF, sans-serif",
    transition: "background 0.3s",
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "80vh",
    gap: "25px",
    padding: "50px",
    fontFamily: "Circular, Quincy CF, sans-serif",
    backgroundColor: COLORS.cream,
    color: COLORS.forest,
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}>
        <button
          style={buttonStylePrimary}
          onClick={() => navigate("/home")}
        >
          Profile / Home
        </button>

        <button
          style={buttonStylePrimary}
          onClick={() => navigate("/goals")}
        >
          To-Do / Goals
        </button>

        <button
          style={buttonStyleSecondary}
          onClick={() => navigate("/SOS")}
        >
          SOS Contacts
        </button>

        <button
          style={buttonStyleSecondary}
          onClick={() => navigate("/")}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;