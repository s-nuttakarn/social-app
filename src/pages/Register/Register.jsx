import { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import style from "./register.module.scss";

export default function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(loginData);
  };
  return (
    <div className={style.registerContainer}>
      <div className={style.inputForm}>
        <span>Register</span>
        <InputGroup
          type="email"
          name="email"
          placeholder="Email"
          icon="fa-solid fa-envelope"
          handleChange={handleChange}
          value={loginData.email}
        />
        <InputGroup
          type="password"
          name="password"
          placeholder="Password"
          icon="key"
          handleChange={handleChange}
          value={loginData.password}
        />

        <InputGroup
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon="key"
          handleChange={handleChange}
          value={loginData.password}
        />
        <button type="buttton" onClick={handleSubmit}>
          Click to Register.
        </button>
      </div>
    </div>
  );
}
