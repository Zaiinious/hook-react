// hooks/useLocalStorage.js
import { useState, useEffect, useDebugValue } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useDebugValue(`LocalStorage key: ${key}`);

  return [value, setValue];
}
