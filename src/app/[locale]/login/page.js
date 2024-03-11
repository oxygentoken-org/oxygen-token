"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

//Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

//Styles
import "../../../styles/login.css";

//Assets
import logoOxygen from "../../../../public/assets/images/logo.png";

const Login = () => {
  const loginIdioms = useTranslations("Login");
  return (
    <>
      <Navbar />
      <section className="login">
        <h1>{loginIdioms("login-title")}</h1>

        <div className="loginFormContainer">
          <Image src={logoOxygen} alt="logo" className="loginFormImg" />
          <h3>{loginIdioms("login-form-title")}</h3>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
