import { useState } from "react";
export default function useInputs(initialValue, validationFn) {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);

  const isValid = validationFn(value);

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChage(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  return {
    value,
    handleInputBlur,
    handleInputChage,
    hasError: isEdited && !isValid,
  };
}
