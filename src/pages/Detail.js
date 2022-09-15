import React from "react";
import { useParams } from "react-router-dom";

import { PhotoCardDetail } from "../container/PhotoCardDetail";
import { Layout } from "../components/Layout";

export const Detail = () => {
  const { detailId } = useParams();
  return (
    <>
      <Layout title={`Foto ${detailId}`} />
      <PhotoCardDetail id={detailId} />
    </>
  );
};
