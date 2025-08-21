import { useState, useLayoutEffect } from "react";
import "../App.css";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="card">
      <h2>useLayoutEffect - Posisi Scroll</h2>
      <p style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#6c63ff",
        marginBottom: "1rem"
      }}>
        Scroll Y: {scrollY}px
      </p>

      {/* Konten panjang supaya bisa scroll */}
      <div style={{
        height: "1500px",
        marginTop: "1rem",
        background: "linear-gradient(to bottom, #f0f0f0, #d1d1f0)",
        borderRadius: "12px",
        padding: "1rem"
      }}>
        <p>Scroll ke bawah untuk melihat posisi scroll berubah real-time.</p>
        <p style={{
          marginTop: "700px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#6c63ff",
          marginBottom: "1rem"
        }}>
        Scroll Y: {scrollY}px
      </p>
      </div>
    </div>
  );
}
