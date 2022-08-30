import React from "react";

import { PhotoCard } from "../PhotoCard";

export const ListOfFavs = ({ favs = [] } = {}) => {
  return (
    <ul>
      {favs.map((photo) => (
        <PhotoCard key={photo.id} favs={true} {...photo} />
      ))}
    </ul>
  );
};

// import React from "react";
// import { Grid, Image, Link } from "./styles";

// export const ListOfFavs = ({ favs = [] }) => {
//   return (
//     <Grid>
//       {favs.map((fav) => (
//         <Link key={fav.id} to={`/detail/${fav.id}`}>
//           <Image src={fav.src} />
//         </Link>
//       ))}
//     </Grid>
//   );
// };
