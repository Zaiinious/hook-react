import { useReducer, useState } from "react";
import "../App.css";

function reducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return todos.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case "DELETE":
      return todos.filter(t => t.id !== action.id);
    default:
      return todos;
  }
}

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h2>Todo List (useReducer)</h2>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Tambah todo"/>
      <button className="btn green" onClick={() => { dispatch({ type: "ADD", text }); setText(""); }}>Tambah</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.text}
            <button className="btn blue" onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>✔</button>
            <button className="btn red" onClick={() => dispatch({ type: "DELETE", id: todo.id })}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
