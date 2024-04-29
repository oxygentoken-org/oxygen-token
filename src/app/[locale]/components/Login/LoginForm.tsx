//Assets
"use client";
import logoOxygen from "../../../../../public/assets/images/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./login.css";
import { ChangeEvent, useState } from "react";
import { InputWithLabel } from "../ui/input-with-label";
import { Button } from "../ui/button";

const LoginForm = () => {
  const t = useTranslations("Login");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Image src={logoOxygen} alt="logo" className="loginFormImg" />
        <h2 className="text-center text-3xl/10 font-bold">
          {t("login-form-title")}
        </h2>

        <form
          className="flex flex-col gap-8 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <InputWithLabel
            variant="large"
            type="email"
            id="email"
            label={t("email-field")}
            required
          />

          <div>
            <InputWithLabel
              variant="large"
              type="password"
              id="password"
              label={t("password-field")}
              required
            />
            <a className="text-xs mt-2">{t("forgot-password")}</a>
          </div>

          <Button type="submit">{t("login-btn")}</Button>

          <div className="signUpCTA">
            <p>{t("login-no-account")}</p>{" "}
            <a href="/register">{t("login-cta")}</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
