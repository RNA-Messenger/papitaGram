import React from "react";
import { CategoryLink, Image } from "./styles";
const DEFAULT_IMAGE = "https://imgur.com/dRnvRZZ.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "/",
  emoji = "...",
}) => {
  return (
    <CategoryLink to={path}>
      <Image src={cover} />
      {emoji}
    </CategoryLink>
  );
};
