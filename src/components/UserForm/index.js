import React from "react";
import { Link } from "react-router-dom";

import { FormTitle, Form, Input, Submit, Error } from "./styles";

import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ formTitle, onSubmit, disabled, error }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const BottomText = () =>
    location.pathname === "/register" ? (
      <p>
        ¿Ya tienes cuenta? <Link to="/user">Inicia Sesión.</Link>
      </p>
    ) : (
      <p>
        ¿Aún no tienes cuenta? <Link to="/register">Crea una cuenta.</Link>
      </p>
    );

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <>
      {error && <Error>{error}</Error>}

      <Form disabled={disabled} onSubmit={handleUserFormSubmit}>
        <FormTitle> {formTitle} </FormTitle>
        <Input
          disabled={disabled}
          placeholder="Email"
          type="email"
          name="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          name="password"
          {...password}
        />

        <Submit type="submit" disabled={disabled}>
          {formTitle}
        </Submit>
      </Form>
      <BottomText />
    </>
  );
};
