import { useState } from "react";
import Input from "./Input";

export default function LoginwithState() {
  // const [email, setEmail] = useState("example@gmail.com");
  // const [password, setPassword] = useState("123456");
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);

  // --------------->Validation on KeyPress (tuşa basınca)
  // const emailIsInValid = values.email !== "" && !values.email.includes("@");
  // const passwordShort = values.password !== "" && values.password.length < 8;

  // --------------->Validation on Blur (tab tuşuna basınca diğerine geçince)
  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const emailIsInValid = isEdited.email && !values.email.includes("@"); //
  const passwordShort = isEdited.password && values.password.length < 8;

  function handleInputBlur(e) {
    const name = e.target.name;
    setIsEdited((prev) => ({ ...prev, [name]: true })); // bir sonraki inputa geçince hata varsa başlatır
  }

  function handleSubmit(e) {
    e.preventDefault();
    setValues(initialValues); // submitten sonra formu 0lar
  }

  function handleInputChage(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value }); // inputları valueya atar
    setIsEdited((prev) => ({ ...prev, [name]: false })); // yazmaya başlayınca hatayı kapat
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <Input
        labelText="Email"
        type="email"
        name="email"
        onBlur={handleInputBlur}
        placeholder={values.email}
        onChange={handleInputChage}
        error={emailIsInValid && "Enter a valid Email"}
      />
      <div className="mb-4">
        <Input
          labelText="Password"
          type="password"
          name="password"
          onBlur={handleInputBlur}
          placeholder={values.password}
          onChange={handleInputChage}
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
