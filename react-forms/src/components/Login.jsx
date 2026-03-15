import { useRef, useState } from "react";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const email = useRef(); // controllerın referansını alıyor.
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const emailIsValid = !emailVal.includes("@");
    const passwordIsValid = passwordVal.length < 8;

    if (emailIsValid) {
      setEmailError(true);
      return;
    }
    if (passwordIsValid) {
      setPasswordError(true);
      return;
    }

    email.current.value = "";
    password.current.value = "";
    setEmailError(false);
    setPasswordError(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          ref={email}
        />
        {emailError && (
          <div className="invalid-feedback d-block">Enter Valid Email.</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={password}
        />
        {passwordError && (
          <div className="invalid-feedback d-block">
            Password should be bigger then 8.
          </div>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
