import { gql, useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

// export const GET_FAVS = graphql(gql`
//   query getFavs {
//     favs {
//       id
//       categoryId
//       src
//       likes
//       userId
//     }
//   }
// `);

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
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error };
};
