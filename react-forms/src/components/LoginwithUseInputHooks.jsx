import Input from "./Input";
import useInputs from "../hooks/useInputs";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validations";

export default function LoginwithUseInputHooks() {

    
  const {
    value: emailValue,
    handleInputBlur: handleEmailInputBlur,
    handleInputChage: handleEmailchange,
    hasError: hasEmailError,
  } = useInputs("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordInputBlur,
    handleInputChage: handlePasswordChange,
    hasError: hasPasswordError,
  } = useInputs("", (value) => hasMinLength(value, 8));

  function handleSubmit(e) {
    e.preventDefault();

    if (hasEmailError || hasPasswordError) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <Input
        labelText="Email"
        type="email"
        name="email"
        onBlur={handleEmailInputBlur}
        placeholder={emailValue}
        onChange={handleEmailchange}
        error={hasEmailError && "Enter a valid Email"}
      />
      <div className="mb-4">
        <Input
          labelText="Password"
          type="password"
          name="password"
          onBlur={handlePasswordInputBlur}
          placeholder={passwordValue}
          onChange={handlePasswordChange}
          error={hasPasswordError && "Password should be bigger then 8."}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
