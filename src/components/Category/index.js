import React from "react";
import { Anchor, Image } from "./styles";
const DEFAULT_IMAGE = "https://imgur.com/dRnvRZZ.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "..." }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
