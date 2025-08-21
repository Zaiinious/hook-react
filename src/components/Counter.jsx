import { useState } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        Jumlah Klik: <b>{count}</b>
      </p>
      <div>
        <button className="btn blue" onClick={() => setCount(count + 1)}>+ Tambah</button>
        <button className="btn yellow" onClick={() => setCount(count - 1)}>- Kurang</button>
        <button className="btn red" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
