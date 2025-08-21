import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("counter");

  const menus = [
    { id: "counter", label: "Counter" },
  ];

  return (
    <div className="container">
      <h1>React Hooks Playground 🚀</h1>

      <div className="menu">
        {menus.map(menu => (
          <button 
            key={menu.id}
            onClick={() => setPage(menu.id)} 
            className={page === menu.id ? "active" : ""}
          >
            {menu.label}
          </button>
        ))}
      </div>

      <div>
        {page === "counter" && <Counter />}
      </div>
    </div>
  );
}
