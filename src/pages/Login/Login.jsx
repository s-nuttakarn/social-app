import { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import style from "./login.module.scss";

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
    <div className={style.loginContainer}>
      <div className={style.inputForm}>
        <span>Login</span>
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
        <button type="buttton" onClick={handleSubmit}>
          Click to login.
        </button>
      </div>
    </div>
  );
}
