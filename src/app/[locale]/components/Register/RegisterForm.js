import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Asegúrate de importar desde react-hook-form
import "./register.css";

const RegisterForm = () => {
  const { register, handleSubmit, errors, watch } = useForm(); // Confirma que no tienes errores en esta línea
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="registerForm">
      <div className="registerNav">
        <a href="/login">Atrás</a>
      </div>
      <h2 className="registerTitle"> ¡Bienvenido!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formFieldDiv">
          <div className="formField">
            <label htmlFor="firstName">Nombre:</label>
            <input
              id="firstName"
              name="firstName"
              {...register("firstName", { required: true })} // Cambié a uso de spread para el `register`
            />
            {errors?.firstName && <span>Este campo es obligatorio.</span>}
          </div>
          <div className="formField">
            <label htmlFor="lastName">Apellido:</label>
            <input
              id="lastName"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName && <span>Este campo es obligatorio.</span>}
          </div>
        </div>

        <div className="formFieldDiv">
          <div className="formField">
            <label htmlFor="companyName">
              Nombre de la empresa (opcional):
            </label>
            <input
              id="companyName"
              name="companyName"
              {...register("companyName")}
            />
          </div>
          <div className="formField">
            <label htmlFor="country">País:</label>
            <input
              id="country"
              name="country"
              {...register("country", { required: true })}
            />
            {errors?.country && <span>Este campo es obligatorio.</span>}
          </div>
        </div>

        <div className="formField">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors?.email && <span>Introduce un correo válido.</span>}
        </div>

        <div className="formFieldDiv">
          <div className="formField">
            <label htmlFor="password">Crear contraseña:</label>
            <input
              id="password"
              name="password"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors?.password && (
              <span>La contraseña debe tener al menos 8 caracteres.</span>
            )}
          </div>
          <div className="formField">
            <label htmlFor="confirmPassword">Repetir contraseña:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors?.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              {...register("terms", { required: true })}
            />
            Acepto los términos y condiciones
          </label>
          {errors?.terms && (
            <span>Debes aceptar los términos y condiciones.</span>
          )}
        </div>

        <div>
          <button type="submit" disabled={!agreedToTerms}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
