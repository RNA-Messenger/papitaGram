import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useSinglePhoto = (id) => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  return { loading, data, error };
};
