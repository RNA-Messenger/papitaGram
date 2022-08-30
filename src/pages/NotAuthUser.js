import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserForm } from "../components/UserForm";
import { AppContext } from "../context/AppContext";
import { useLogInUser } from "../lib/graphql/mutations/useLogInUser";

export const NotAuthUser = () => {
  const { activateAuth } = useContext(AppContext);
  const [logInUserMutation, { data, loading, error }] = useLogInUser();
  const navigateTo = useNavigate();

  const logInUserOnSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    logInUserMutation({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
    // console.log(error);

    // if (!error) {
    //   activateAuth.then(navigateTo("/user"));
    // }
  };
  const errorMsg =
    error && "Oops! Hemos encontrado un error al intentar loguearte.";

  return (
    <UserForm
      onSubmit={logInUserOnSubmit}
      formTitle="Login"
      error={errorMsg}
      disabled={loading}
    />
  );
};
