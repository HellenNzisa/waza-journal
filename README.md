<div align="center">

```
██╗    ██╗ █████╗ ███████╗ █████╗
██║    ██║██╔══██╗╚══███╔╝██╔══██╗
██║ █╗ ██║███████║  ███╔╝ ███████║
██║███╗██║██╔══██║ ███╔╝  ██╔══██║
╚███╔███╔╝██║  ██║███████╗██║  ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**A safe space for reflection, goal-setting, and personal growth.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Auth_%26_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Vite](https://img.shields.io/badge/Vite-Dev_Server-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-606c38?style=flat-square)](LICENSE)

<br/>

*Come home to yourself.*

</div>

---

## ✦ What is Waza?

Waza is a personal journaling web app built as a calm, intentional digital space. It's designed for people who want more than a blank page — a guided experience that helps you show up for yourself every day.

Whether you're processing a hard day, setting a weekly intention, or simply checking in — Waza meets you where you are.

**Core pillars:**
- 📝 **Journaling** — free-write or follow structured prompts
- 🎯 **Goal Setting** — set daily intentions and to-do lists
- 🔁 **Daily Recaps** — reflect on what you accomplished and felt
- 🆘 **SOS Contacts** — mental health resources always one tap away

---

## 🗂️ Project Structure

```
waza-journal/
├── public/
├── src/
│   ├── assets/
│   │   └── naturebackground.jpg     # Hero background image
│   ├── components/
│   │   ├── Header.jsx
│   │   └── GoalSetter.jsx
│   ├── pages/
│   │   ├── Landing.jsx              # ✦ Hero landing page
│   │   ├── Signup.jsx               # Create account
│   │   ├── Login.jsx                # Log in
│   │   ├── Home.jsx                 # User home & greeting
│   │   ├── Dashboard.jsx            # Navigation hub
│   │   ├── SOS.jsx                  # Mental health contacts
│   │   └── Recap.jsx                # Daily reflection summary
│   ├── styles/
│   │   └── colors.js                # Shared color palette
│   ├── firebaseConfig.js            # Firebase init & auth export
│   └── App.jsx                      # Router & route definitions
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A [Firebase](https://firebase.google.com) project with **Email/Password** authentication enabled

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/waza-journal.git
cd waza-journal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create `src/firebaseConfig.js` and paste your Firebase project config:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

> ⚠️ Never commit real API keys to a public repository. Use `.env` variables in production.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛣️ Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | `Landing` | Hero landing page with CTA |
| `/signup` | `Signup` | Create a new account |
| `/login` | `Login` | Log into existing account |
| `/home` | `Home` | Personalised greeting & goal setter |
| `/dashboard` | `Dashboard` | Navigation hub |
| `/goals` | `GoalSetter` | To-do list & intentions |
| `/SOS` | `SOS` | Mental health contacts |
| `/recap` | `Recap` | Daily reflection summary |

---

## 🎨 Design System

Waza uses a consistent earthy palette across all pages.

```js
// src/styles/colors.js
export const COLORS = {
  darkGreen:  "#606c38",   // Surfaces, panels
  forest:     "#283618",   // Page background
  cream:      "#fefae0",   // Primary text
  gold:       "#dda15e",   // Accents, CTAs, focus states
  clay:       "#bc6c25",   // Hover states, warmth
};
```

**Typography**
- Display / headings: **Quincy CF** — serious but with a whimsical warmth
- Body / UI: **Circular** — clean, readable, modern

---

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 (via Vite) | Component-based UI |
| Routing | React Router DOM | Multi-page navigation |
| Backend | Firebase Auth | Email/password authentication |
| Database | Firebase Firestore | Goals, journal entries *(planned)* |
| Styling | CSS + inline styles | Theming & layout |
| Dev Server | Vite | Hot reloading & fast builds |
| Hosting | Firebase Hosting | Deployment *(planned)* |
| Version Control | Git + GitHub | Backup & collaboration |

---

## 🤝 Contributing

This is a personal learning project, but feedback and ideas are always welcome.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-idea`
3. Commit your changes: `git commit -m "Add your idea"`
4. Push to the branch: `git push origin feature/your-idea`
5. Open a Pull Request

---
