import { forwardRef, useImperativeHandle, useRef } from "react";
import "../App.css";

// forwardRef supaya parent bisa akses ref
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // expose method focus() ke parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Custom Input..."
      className="input-field"
    />
  );
});

export default CustomInput;
