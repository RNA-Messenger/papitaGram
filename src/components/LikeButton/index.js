import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Button } from "./styles";

export const LikeButton = ({ liked, likes, onClick }) => {
  const LikeIcon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <LikeIcon size="32px" />
      {likes} likes!
    </Button>
  );
};
