import React from "react";
import { Submit } from "./styles";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Submit onClick={onClick} disabled={disabled}>
      {children}
    </Submit>
  );
};
