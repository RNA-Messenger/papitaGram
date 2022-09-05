import React from "react";

import { useGetFavPhotos } from "../lib/graphql/queries/GET_FAVS";

import { ListOfFavs } from "../components/ListFavorites";
import { Layout } from "../components/Layout";

export default () => {
  const { loading, data, error, refetch } = useGetFavPhotos();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.. </p>;
  const { favs } = data;
  return (
    <>
      <Layout
        title="Favoritos"
        subtitle="Aqui puedes ver todas tus mascotas favoritas"
      />
      <ListOfFavs favs={favs} refetch={refetch} />
    </>
  );
};
