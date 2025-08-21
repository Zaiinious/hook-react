import { useReducer, useState } from "react";
import "../App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD_TODO", payload: input.trim() });
    setInput("");
  };

  return (
    <div className="card">
      <h2>Todo List (useReducer)</h2>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis todo..."
          className="input-field"
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd} className="btn blue">Tambah</button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: todo.completed ? "#d4edda" : "#f0f0f0",
            borderRadius: "8px",
            padding: "0.5rem 0.75rem",
            marginBottom: "0.5rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "all 0.3s"
          }}>
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                fontWeight: todo.completed ? "500" : "400",
                color: todo.completed ? "#155724" : "#333"
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
              className="btn red"
              style={{ padding: "0.2rem 0.5rem", fontSize: "0.8rem" }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
