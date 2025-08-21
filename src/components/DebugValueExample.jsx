// components/DebugValueExample.jsx
import useLocalStorage from "../hooks/useLocalStorage";
import "../App.css";

export default function DebugValueExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="card">
      <h2>useDebugValue Example</h2>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama"
      />
      <p>Nama: {name}</p>
    </div>
  );
}
