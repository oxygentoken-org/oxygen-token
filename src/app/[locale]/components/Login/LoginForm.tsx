"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { InputWithLabel } from "../ui/InputWithLabel";
import { Button } from "../ui/Button";

import logoOxygen from "../../../../../public/assets/images/logo.png";

const LoginForm = () => {
  const t = useTranslations("Login");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Image src={logoOxygen} alt="logo" className="w-full max-w-[200px]" />

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

          <p className="text-sm/5 text-center">
            {t("login-no-account")}{" "}
            <Link
              href="/register"
              className="font-bold hover:underline decoration-2"
            >
              {t("login-cta")}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
