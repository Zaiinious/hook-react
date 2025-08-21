import { createContext, useContext, useState } from "react";
import "../App.css";

const ThemeContext = createContext();

function ThemedBox() {
  const { theme } = useContext(ThemeContext);
  return <div className={`themed-box ${theme}`}>Tema saat ini: {theme}</div>;
}

export default function ThemeContextApp() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`card ${theme}`}>
        <h2>Theme Switcher (useContext)</h2>
        <button className="btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Ganti Tema
        </button>
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}
