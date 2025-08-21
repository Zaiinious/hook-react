import { useMemo, useState } from "react";
import "../App.css";

// fungsi menghitung faktorial (berat untuk angka besar)
function factorial(n) {
  console.log("Hitung factorial untuk:", n);
  if (n <= 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default function FactorialMemo() {
  const [number, setNumber] = useState(5);
  const [name, setName] = useState("");

  // hanya dihitung ulang kalau `number` berubah
  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div className="card">
      <h2>useMemo - Factorial</h2>
      
      <div style={{ marginBottom: "1rem" }}>
        <label>Masukkan angka: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="input-field"
          style={{ maxWidth: "120px" }}
        />
      </div>

      <p><b>Factorial {number}</b> = {fact}</p>

      <hr style={{ margin: "1rem 0" }} />

      <div>
        <label>Masukkan nama: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <p>Halo, {name || "..."}</p>
      </div>
    </div>
  );
}
