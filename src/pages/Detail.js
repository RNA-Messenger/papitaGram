import React from "react";
import { useParams } from "react-router-dom";

import { PhotoCardDetail } from "../container/PhotoCardDetail";

export const Detail = () => {
  const { detailId } = useParams();
  return <PhotoCardDetail id={detailId} />;
};
