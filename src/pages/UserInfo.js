import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SubmitButton } from "../components/SubmitButton";

export default () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <h2> Usuario </h2>
      <SubmitButton onClick={removeAuth}>Log Out</SubmitButton>
    </>
  );
};
