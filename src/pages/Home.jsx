// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import GoalSetter from "../components/GoalSetter";

function Home() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get currently logged in user
    const user = auth.currentUser;
    if (user) {
      // You could use user.displayName if you later let users set names
      setUserName(user.email.split("@")[0]); // show part before @ as name
    } else {
      setUserName("Guest");
    }
  }, []);

  return (
    <div className="page">
      <h1>Hi {userName} 👋</h1>
      <p>Welcome to your personal Waza space. Set goals, reflect, and grow daily.</p>

      {/* Quick navigation buttons */}
      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "30px"
      }}>
        <button
          className="button-primary"
          onClick={() => navigate("/goals")}
        >
          Set Goals / To-Do
        </button>

        <button
          className="button-primary"
          onClick={() => navigate("/recap")}
        >
          Recap The Day
        </button>

        <button
          className="button-secondary"
          onClick={() => navigate("/SOS")}
        >
          SOS Contacts
        </button>

        <button
          className="button-secondary"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </div>

      {/* Include GoalSetter directly */}
      <div style={{ marginTop: "50px", maxWidth: "600px", width: "100%" }}>
        <GoalSetter />
      </div>
    </div>
  );
}

export default Home;