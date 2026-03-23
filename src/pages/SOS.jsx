// src/pages/SOS.jsx
function SOS() {
  const contacts = [
    { name: "Kenya Counselling & Psychological Services", phone: "+254 700 000 000" },
    { name: "MindPeace Kenya", phone: "+254 711 111 111" },
    { name: "Kenya Red Cross Mental Health", phone: "+254 733 222 222" }
  ];

  return (
    <div className="page">
      <h1>SOS Contacts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map((c, i) => (
          <li key={i} style={{
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "var(--forest)",
            color: "var(--cream)",
            maxWidth: "400px",
            margin: "10px auto"
          }}>
            <strong>{c.name}</strong>: {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SOS;