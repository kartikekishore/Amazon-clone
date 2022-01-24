import { START_LOADING, END_LOADING, CREATE, DELETE } from "../actions/types";

const cartReducer = (state = { isLoading: true, items: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case CREATE:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
