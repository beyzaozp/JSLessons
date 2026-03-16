import { useState } from "react";
export default function useInputs(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);

  

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChage(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  return { value, handleInputBlur, handleInputChage, isEdited };
}
