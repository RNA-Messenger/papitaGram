import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLogInUser = () => {
  const [logInUserMutation, { data, loading, error }] = useMutation(LOGIN_USER);
  return [logInUserMutation, { data, loading, error }];
};
