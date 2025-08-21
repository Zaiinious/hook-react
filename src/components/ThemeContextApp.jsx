import { createContext, useContext, useState } from "react";
import "../App.css";

// Buat context untuk tema
const ThemeContext = createContext();

// Provider untuk membungkus komponen
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // light / dark

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"} style={{ minHeight: "100vh", padding: "2rem", transition: "all 0.5s" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Tombol untuk ganti tema
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="btn green">
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Menampilkan tema saat ini
function DisplayTheme() {
  const { theme } = useContext(ThemeContext);
  return <h2>Tema Sekarang: {theme.toUpperCase()}</h2>;
}

// Komponen utama ThemeSwitcher
export default function ThemeSwitcher() {
  return (
    <ThemeProvider>
      <div className="card" style={{ textAlign: "center" }}>
        <DisplayTheme />
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
