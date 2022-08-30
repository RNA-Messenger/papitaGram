import { gql, useMutation } from "@apollo/client";

// const LIKE_PHOTO = gql`
//   mutation likeAnonymousPhoto($input: LikePhoto!) {
//     likeAnonymousPhoto(input: $input) {
//       id
//       liked
//       likes
//     }
//   }
// `;

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useMutationToggleLike = () => {
  const [likeMutation, { loading, error }] = useMutation(LIKE_PHOTO);
  return { likeMutation, loading, error };
};
