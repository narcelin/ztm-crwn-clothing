import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h1>I already have an account</h1>
      <p>Sign in with your email and password</p>
      <form onSubmit={() => {}}>
        <input name="email" type="email" onChange={handleChange} required />
        <input name="password" type="password" required />
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};

export default SignInForm;
