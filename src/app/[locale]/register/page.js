"use client";
import { useTranslations } from "next-intl";

//Components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Register/RegisterForm";

import "../../../styles/login.css";

const Register = () => {
  const loginIdioms = useTranslations("Login");
  return (
    <>
      <Navbar />
      <section className="login">
        <h1>{loginIdioms("login-title")}</h1>

        <div className="loginFormContainer">
          <RegisterForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
