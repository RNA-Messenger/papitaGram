import React from "react";
import { Link } from "react-router-dom";
import { PostArticle, ImgWrapper, Img } from "./styles";
import { LikeButton } from "../LikeButton";

import { useNearScreen } from "../../hooks/useNearScreen";
import { useMutationToggleLike } from "../../lib/graphql/mutations/UseMutationToggleLike";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png ";

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE,
  alt = "no image alt",
  favs = false,
}) => {
  const [isShowing, ref] = useNearScreen();
  const { likeMutation } = useMutationToggleLike();
  const handleLikes = () => {
    likeMutation({
      variables: {
        input: { id },
      },
    });
    favs = false;
  };
  console.log(favs);
  return (
    <PostArticle ref={ref}>
      {isShowing && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={alt} />
            </ImgWrapper>
          </Link>
          <LikeButton
            liked={liked}
            likes={likes}
            favs={favs}
            onClick={() => handleLikes()}
          />
        </>
      )}
    </PostArticle>
  );
};
