import React from "react";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCardsHOC } from "../hoc/ListPhotoCardsHOC";
import { Layout } from "../components/Layout";

export const Home = () => {
  const { categoryId } = useParams();
  return (
    <>
      <Layout
        title="Red para amigos de las mascotas"
        subtitle="En PetPals puedes encontrar bellas fotos de animales domesticos"
      />
      <ListOfCategories />
      <ListOfPhotoCardsHOC categoryId={categoryId} />
    </>
  );
};
