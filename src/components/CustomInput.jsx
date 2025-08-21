import { forwardRef, useImperativeHandle, useRef } from "react";
import "../App.css";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} type="text" placeholder="Custom Input..." />;
});

export default CustomInput;
