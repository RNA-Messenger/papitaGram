import React from "react";
import { useParams } from "react-router-dom";

import { useSinglePhoto } from "../lib/graphql/queries/GET_SINGLE_PHOTO";
import { PhotoCard } from "../components/PhotoCard";

import { Layout } from "../components/Layout";

export const Detail = () => {
  const { detailId } = useParams();
  const { loading, data, error } = useSinglePhoto(detailId);
  if (loading) return <p>Loading Photo...</p>;
  if (error) return <p> Ooops! Please try again.</p>;
  const { photo = {} } = data;
  return (
    <>
      <Layout title={`Foto ${detailId}`} />
      <PhotoCard id={detailId} photo={photo} />
    </>
  );
};
