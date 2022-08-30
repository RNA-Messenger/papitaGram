import React from "react";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = () => {
  const { categoryId } = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};
