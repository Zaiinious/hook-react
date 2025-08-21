import { useState, useCallback } from "react";
import "../App.css";

export default function ItemListCallback() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // handler untuk tambah item, tidak dibuat ulang setiap render
  const handleAdd = useCallback(() => {
    if (!input) return;
    setItems(prev => [...prev, input]);
    setInput("");
  }, [input]);

  return (
    <div className="card">
      <h2>useCallback - Daftar Item</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis item..."
          className="input-field"
        />
        <button onClick={handleAdd} className="btn blue">
          Tambah Item
        </button>
      </div>

      <ul style={{ textAlign: "left", paddingLeft: "1.2rem" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.3rem" }}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
