import React from "react";
import { useGetFavPhotos } from "../lib/graphql/queries/GET_FAVS";
import { ListOfFavs } from "../components/ListFavorites";

export const Favs = () => {
  const { loading, data, error } = useGetFavPhotos();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.. </p>;
  const { favs } = data;
  return <ListOfFavs favs={favs} />;
};
