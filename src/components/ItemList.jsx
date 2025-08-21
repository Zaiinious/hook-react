import { useCallback, useState } from "react";
import "../App.css";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = useCallback(() => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <div className="card">
      <h2>Daftar Item (useCallback)</h2>
      <button className="btn blue" onClick={addItem}>Tambah Item</button>
      <button className="btn green" onClick={() => setCount(count + 1)}>Tambah Counter</button>
      <p>Counter: {count}</p>
      <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
    </div>
  );
}
