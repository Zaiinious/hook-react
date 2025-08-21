import { useEffect, useRef } from "react";
import "../App.css";

export default function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="card">
      <h2>Auto Focus Input (useRef)</h2>
      <input ref={inputRef} type="text" placeholder="Ketik sesuatu..." />
    </div>
  );
}
