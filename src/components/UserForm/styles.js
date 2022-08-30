import styled from "styled-components";

export const FormTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0 auto 32px;
`;

export const Form = styled.form`
  padding: 16px;
`;

export const Input = styled.input`
  border: 1px solid silver;
  margin: auto auto 16px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

export const Submit = styled.button`
  background: #ff93ac;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 32px auto 0;
  border: 3px solid #cf92d2;
`;

export const Error = styled.p`
  font-size: 14px;
  background-color: #ff084a;
  color: #fff;
  width: 100%;
  text-align: center;
`;
