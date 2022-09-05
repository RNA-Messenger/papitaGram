import React from "react";

import { PhotoCard } from "../PhotoCard";

export const ListOfFavs = ({ favs = [], refetch } = {}) => {
  return (
    <ul>
      {favs.map((photo) => (
        <PhotoCard key={photo.id} favs={true} refetch={refetch} {...photo} />
      ))}
    </ul>
  );
};
