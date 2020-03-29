import { FAVORITE_ADD, FAVORITE_REMOVE } from "../actionTypes";

export const favoriteAdd = (id: string) => ({
  type: FAVORITE_ADD,
  payload: id
});

export const favoriteRemove = (id: string) => ({
  type: FAVORITE_REMOVE,
  payload: id
});
