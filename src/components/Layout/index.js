import React from "react";
import { Helmet } from "react-helmet";
// import { TitleWrapper, Title, Subtitle } from "./styles";

export const Layout = ({ title, subtitle }) => {
  return (
    <Helmet>
      {title && <title>{title} | PetPals</title>}
      {subtitle && <meta name="description" content={subtitle} />}
      {/* <TitleWrapper>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleWrapper> */}
    </Helmet>
  );
};
