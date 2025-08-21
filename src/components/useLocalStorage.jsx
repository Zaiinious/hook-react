import { useState, useEffect, useDebugValue } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  // gunakan useDebugValue agar muncul di React DevTools
  useDebugValue(key ? `LocalStorage Key: ${key}` : "No Key");

  return [value, setValue];
}
