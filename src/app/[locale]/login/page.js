"use client";
import { useTranslations } from "next-intl";

//Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login/LoginForm";

//Styles
import "../../../styles/login.css";

const Login = () => {
  const loginIdioms = useTranslations("Login");
  return (
    <>
      <Navbar />
      <section className="login">
        <h1>{loginIdioms("login-title")}</h1>

        <div className="loginFormContainer">
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
