import { gql, useQuery } from "@apollo/client";

export const LIST_PHOTO_CARDS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetListOfPhotos = (id) => {
  const { loading, data, error, refetch } = useQuery(LIST_PHOTO_CARDS, {
    variables: { id },
  });
  return { loading, data, error, refetch };
};
