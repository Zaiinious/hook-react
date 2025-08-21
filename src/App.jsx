import { useState } from "react";
import Counter from "./components/Counter";
import FetchData from "./components/FetchUser";
import ThemeApp from "./components/ThemeContextApp";
import FormInput from "./components/InputFocus";
import FactorialMemo from "./components/FactorialMemo";
import ItemListCallback from "./components/ItemList";
import TodoReducer from "./components/TodoReducer";
import ScrollPosition from "./components/ScrollPosition";
import UseImperativeHandleExample from "./components/UseImperativeHandleExample";
import UseLocalStorageExample from "./components/UseLocalStorageExample";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("counter");

  const menus = [
    { id: "counter", label: "Counter" },
    { id: "fetch", label: "Fetch Data" },
    { id: "theme", label: "Theme" },
    { id: "input", label: "Input Focus" },
    { id: "factorial", label: "Factorial Memo" },
    { id: "item-list", label: "Item List" },
    { id: "todo", label: "Todo List" },
    { id: "scroll", label: "Scroll Position" },
    { id: "use-imperative-handle", label: "Use Imperative Handle" },
    { id: "use-local-storage", label: "Use Local Storage" }
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
        {page === "fetch" && <FetchData />}
        {page === "theme" && <ThemeApp />}
        {page === "input" && <FormInput />}
        {page === "factorial" && <FactorialMemo />}
        {page === "item-list" && <ItemListCallback />}
        {page === "todo" && <TodoReducer />}
        {page === "scroll" && <ScrollPosition />}
        {page === "use-imperative-handle" && <UseImperativeHandleExample />}
        {page === "use-local-storage" && <UseLocalStorageExample />}
      </div>
    </div>
  );
}
