import { useRef } from "react";
import CustomInput from "./CustomInput";
import "../App.css";

export default function UseImperativeHandleExample() {
  const customInputRef = useRef();

  const handleFocus = () => {
    customInputRef.current.focus();
  };

  return (
    <div className="card">
      <h2>useImperativeHandle - Custom Input</h2>
      <CustomInput ref={customInputRef} />
      <button onClick={handleFocus} className="btn green" style={{ marginTop: "1rem" }}>
        Fokus Input dari Parent
      </button>
    </div>
  );
}
