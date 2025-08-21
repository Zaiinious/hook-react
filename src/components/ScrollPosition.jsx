import { useLayoutEffect, useState } from "react";
import "../App.css";

export default function ScrollPosition() {
  const [pos, setPos] = useState(0);

  useLayoutEffect(() => {
    function onScroll() {
      setPos(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="card">
      <h2>Scroll Position (useLayoutEffect)</h2>
      <p>Posisi Scroll: {pos}px</p>
    </div>
  );
}
