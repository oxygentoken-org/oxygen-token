//Assets
"use client";
import logoOxygen from "../../../../../public/assets/images/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./login.css";
import { useState } from "react";

const LoginForm = () => {
  const loginIdioms = useTranslations("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la solicitud de inicio de sesión con los datos ingresados
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <div className="loginForm">
        <Image src={logoOxygen} alt="logo" className="loginFormImg" />
        <h3>{loginIdioms("login-form-title")}</h3>
        <form onSubmit={handleSubmit}>
          <div className="formField">
            <label htmlFor="email">{loginIdioms("email-field")}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="formField">
            <label htmlFor="password">{loginIdioms("password-field")}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <a>{loginIdioms("forgot-password")}</a>
          </div>
          <button className="submitBtn" type="submit">
            {loginIdioms("login-btn")}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
