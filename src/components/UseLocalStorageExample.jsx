import { useLocalStorage } from "./useLocalStorage";
import "../App.css";

export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="card">
      <h2>useDebugValue - useLocalStorage</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama..."
        className="input-field"
      />
      <p>
        Nama yang tersimpan: <b>{name || "..."}</b>
      </p>
    </div>
  );
}
