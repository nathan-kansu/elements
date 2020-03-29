import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes";
const initialState = [];

const favorites = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return [...state, payload];
    case REMOVE_FAVORITE:
      return [...state.filter(payload)];
    default:
      return state;
  }
};

export default favorites;
