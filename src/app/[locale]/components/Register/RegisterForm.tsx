"use client";
import { useForm } from "react-hook-form";

import { InputWithLabel } from "../ui/input-with-label";
import { Button } from "../ui/button";
import { CheckboxWithLabel } from "../ui/checkbox-with-label";
import { useTranslations } from "next-intl";

const RegisterForm = () => {
  const t = useTranslations("Register");
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const password = watch("password");
  const terms = watch("terms");

  return (
    <div className="flex flex-col">
      <div className="registerNav">
        <a href="/login">{t("register-back")}</a>
      </div>

      <h2 className="text-center text-3xl/10 font-bold">
        {t("register-form-title")}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-16 gap-y-8 mt-10 mb-4"
      >
        <InputWithLabel
          id="firstName"
          label={t("firstname-field")}
          placeholder={t("firstname-placeholder")}
          required
          {...register("firstName", { required: true })}
        >
          {/* {errors?.firstName && <span>Este campo es obligatorio.</span>} */}
        </InputWithLabel>
        <InputWithLabel
          id="lastName"
          label={t("lastname-field")}
          placeholder={t("lastname-placeholder")}
          required
          {...register("lastName", { required: true })}
        >
          {/* {errors?.lastName && <span>Este campo es obligatorio.</span>} */}
        </InputWithLabel>

        <InputWithLabel
          id="companyName"
          label={t("company-field")}
          placeholder={t("company-placeholder")}
          {...register("companyName")}
        />

        <InputWithLabel
          id="country"
          label={t("country-field")}
          placeholder={t("country-placeholder")}
          required
          {...register("country", { required: true })}
        >
          {/* {errors?.country && <span>Este campo es obligatorio.</span>} */}
        </InputWithLabel>

        <InputWithLabel
          className="col-span-2"
          id="email"
          label={t("email-field")}
          placeholder={t("email-placeholder")}
          required
          {...register("email", { required: true })}
        >
          {/* {errors?.email && <span>Introduce un correo válido.</span>} */}
        </InputWithLabel>

        <InputWithLabel
          id="password"
          type="password"
          label={t("password-field")}
          placeholder={t("password-placeholder")}
          required
          {...register("password", { required: true, minLength: 8 })}
        >
          {/* {errors?.password && (
            <span>La contraseña debe tener al menos 8 caracteres.</span>
          )} */}
        </InputWithLabel>

        <InputWithLabel
          id="validatePassword"
          type="password"
          label={t("verify-password-field")}
          placeholder={t("verify-password-placeholder")}
          required
          {...register("validatePassword", {
            validate: (value) => value === password || t("password-no-match"),
          })}
        >
          {/* {errors?.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )} */}
        </InputWithLabel>

        <div className="col-span-2 flex flex-col items-center">
          <Button
            className="w-full max-w-80 my-5"
            type="submit"
            disabled={!terms}
          >
            {t("register-btn")}
          </Button>

          <CheckboxWithLabel
            id="terms"
            label={t("terms-and-conditions")}
            {...register("terms", { required: true })}
          />
          {/* {errors?.terms && (
            <span>Debes aceptar los términos y condiciones.</span>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
