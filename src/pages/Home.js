import React from "react";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

export const Home = () => {
  const { categoryId } = useParams();
  console.log("papita home");
  return (
    <>
      <Layout
        title="Red para amigos de las mascotas"
        subtitle="En PetPals puedes encontrar bellas fotos de animales domesticos"
      />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};
