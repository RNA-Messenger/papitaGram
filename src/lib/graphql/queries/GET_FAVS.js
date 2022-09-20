import { gql, useQuery } from "@apollo/client";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useGetFavPhotos = () => {
  const { loading, data, error, refetch } = useQuery(GET_FAVS, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error, refetch };
};
