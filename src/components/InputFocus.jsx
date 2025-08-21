import { useEffect, useRef } from "react";
import "../App.css";

export default function FormInput() {
  const inputRef = useRef(null);

  // fokus otomatis saat pertama kali render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="card">
      <h2>Form Input (useRef)</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ketik sesuatu..."
        className="input-field"
      />
    </div>
  );
}
