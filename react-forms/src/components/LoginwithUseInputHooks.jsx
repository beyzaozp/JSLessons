import Input from "./Input";
import useInputs from "../hooks/useInputs";

export default function LoginwithUseInputHooks() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailInputBlur,
    handleInputChage: handleEmailchange,
    isEdited: isEmailEdited,
  } = useInputs("");
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordInputBlur,
    handleInputChage: handlePasswordChange,
    isEdited: isPasswordEdited,
  } = useInputs("");

  const emailIsInValid = isEmailEdited && !emailValue.includes("@");
  const passwordShort = isPasswordEdited && passwordValue.length < 8;

  function handleSubmit(e) {
    e.preventDefault();
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
        error={emailIsInValid && "Enter a valid Email"}
      />
      <div className="mb-4">
        <Input
          labelText="Password"
          type="password"
          name="password"
          onBlur={handlePasswordInputBlur}
          placeholder={passwordValue}
          onChange={handlePasswordChange}
          error={passwordShort && "Password should be bigger then 8."}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
