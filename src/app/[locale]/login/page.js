import { useTranslations } from "next-intl";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login/LoginForm";

import "../../../styles/login.css";

const Login = () => {
  const t = useTranslations("Login");
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-2 items-center min-h-screen px-12 py-24 gap-12 bg-[url('/assets/images/imgLogin.png')] [background-size:100vw_100vh] bg-no-repeat bg-fixed">
        <h1 className="text-white text-4xl font-medium max-w-lg text-balance">
          {t("login-title")}
        </h1>

        <div className="w-full bg-white flex flex-col p-12 rounded">
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
