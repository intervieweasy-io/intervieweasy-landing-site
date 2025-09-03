"use client";

import { hero, button, card } from "./styles/landing.css";
import { useTheme } from "./context/ThemeProvider";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <section className={hero}>
        <h1>Track it. <span style={{ color: "var(--colors-primary)" }}>Crack it.</span></h1>
        <p>The modern job tracker that helps you land your dream role.</p>
        <div>
          <button className={button}>Start Tracking →</button>
          <button className={button} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
          </button>
        </div>
      </section>

      <section style={{ display: "grid", gap: "1rem", padding: "2rem" }}>
        <div className={card}>Smart Tracking</div>
        <div className={card}>Referral Swap</div>
        <div className={card}>Growth Tracker</div>
      </section>
    </main>
  );
}
