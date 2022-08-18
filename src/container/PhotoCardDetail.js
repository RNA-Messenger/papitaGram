import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { Query } from "@apollo/client/react/components";

import { GET_SINGLE_PHOTO } from "../lib/graphql/queries/GET_SINGLE_PHOTO";

const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <p>Loading Photo...</p>;
  if (error) return <p> Ooops! Please try again.</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export const PhotoCardDetail = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
