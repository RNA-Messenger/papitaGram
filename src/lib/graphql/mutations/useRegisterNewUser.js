import { gql, useMutation } from "@apollo/client";

const REGISTER_NEW_USER = gql`
  mutation sigup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterNewUser = () => {
  const [registerUserMutation, { data, loading, error }] =
    useMutation(REGISTER_NEW_USER);
  return [registerUserMutation, { data, loading, error }];
};
