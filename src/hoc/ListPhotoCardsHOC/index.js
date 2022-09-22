import { LIST_PHOTO_CARDS } from "../../lib/graphql/queries/LIST_OF_PHOTO_CARDS";
import { ListOfPhotoCards } from "../../components/ListOfPhotoCards";

export const ListOfPhotoCardsHOC = LIST_PHOTO_CARDS(ListOfPhotoCards);
