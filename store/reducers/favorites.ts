import { FAVORITE_ADD, FAVORITE_REMOVE } from "../actionTypes";
const initialState = [];

const favorites = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_ADD:
      return [...state, payload];
    case FAVORITE_REMOVE:
      return state.filter(id => id !== payload);
    default:
      return state;
  }
};

export default favorites;
