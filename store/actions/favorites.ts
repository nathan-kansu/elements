import { ADD_FAVORITE } from "../actionTypes";

export const addFavorite = (id: number) => ({
  type: ADD_FAVORITE,
  payload: id
});
