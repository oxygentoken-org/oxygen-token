"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { InputWithLabel } from "../ui/InputWithLabel";
import { Button } from "../ui/Button2";

import logoOxygen from "../../../../../public/assets/images/logo.png";

const LoginForm = () => {
  const t = useTranslations("Login");
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    console.log("Form Data:", data); // TODO login API call
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Image src={logoOxygen} alt="logo" className="w-full max-w-[200px]" />

      <h2 className="text-center text-3xl/10 font-bold">
        {t("login-form-title")}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-sm"
      >
        <InputWithLabel
          variant="large"
          id="email"
          {...register("email", { required: true })}
          label={t("email-field")}
        />

        <div>
          <InputWithLabel
            variant="large"
            type="password"
            id="password"
            {...register("password", { required: true })}
            label={t("password-field")}
          />
          {/* <a className="text-xs mt-2">{t("forgot-password")}</a> */}
        </div>

        <Button
          type="submit"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          {t("login-btn")}
        </Button>

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
  );
};

export default LoginForm;
