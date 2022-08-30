import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserForm } from "../components/UserForm";
import { AppContext } from "../context/AppContext";
import { useRegisterNewUser } from "../lib/graphql/mutations/useRegisterNewUser";

export const RegisterUser = () => {
  const { activateAuth } = useContext(AppContext);
  const [registerUserMutation, { data, loading, error }] = useRegisterNewUser();
  const navigateTo = useNavigate();

  const registerUserOnSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerUserMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });

    // if (!error) {
    //   activateAuth.then(navigateTo("/user"));
    // }
  };
  const errorMsg =
    error &&
    "Oops! Hemos encontrado un error, puede que el usuario ya exista y solo necesites loguearte. Sigue las instrucciones en el link de Log In.";

  return (
    <UserForm
      onSubmit={registerUserOnSubmit}
      formTitle="Registrarse"
      error={errorMsg}
      disabled={loading}
    />
  );
};
