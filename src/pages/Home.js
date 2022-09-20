import React from "react";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories/index";
import { useGetListOfPhotos } from "../lib/graphql/queries/LIST_OF_PHOTO_CARDS";
import { Layout } from "../components/Layout";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
export const Home = () => {
  const { categoryId } = useParams();
  const { loading, data, error, refetch } = useGetListOfPhotos(categoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.. </p>;

  return (
    <>
      <Layout
        title="Red para amigos de las mascotas"
        subtitle="En PetPals puedes encontrar bellas fotos de animales domesticos"
      />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} data={data} />
    </>
  );
};
