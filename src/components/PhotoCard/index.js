import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { PostArticle, ImgWrapper, Img, Button } from "./styles";
import { LikeButton } from "../LikeButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMutationToggleLike } from "../../hooks/UseMutationToggleLike";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png ";

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAULT_IMAGE,
  alt = "no image alt",
}) => {
  const [isShowing, ref] = useNearScreen();
  const key = `liked-${id}`;
  const [liked, setLike] = useLocalStorage(key, false);
  const { mutation } = useMutationToggleLike();
  const handleLikes = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLike(!liked);
  };
  return (
    <PostArticle ref={ref}>
      {isShowing && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt={alt} />
            </ImgWrapper>
          </a>
          <LikeButton
            liked={liked}
            likes={likes}
            onClick={() => handleLikes()}
          />
        </>
      )}
    </PostArticle>
  );
};
