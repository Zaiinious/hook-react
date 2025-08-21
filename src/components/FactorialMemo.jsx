import { useState, useMemo } from "react";
import "../App.css";

function factorial(n) {
  console.log("Hitung factorial...");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialMemo() {
  const [number, setNumber] = useState(5);
  const [other, setOther] = useState("");

  const result = useMemo(() => factorial(number), [number]);

  return (
    <div className="card">
      <h2>Factorial (useMemo)</h2>
      <p>
        Factorial dari {number} adalah {result}
      </p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input
        type="text"
        value={other}
        onChange={(e) => setOther(e.target.value)}
        placeholder="Input lain"
      />
    </div>
  );
}
