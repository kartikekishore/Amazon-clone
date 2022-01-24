import {
  FETCH_CATEGORY,
  FETCH_ALL_CATEGORIES,
  START_LOADING,
  END_LOADING,
  CREATE,
  UPDATE,
  DELETE,
} from "../actions/types";

const categoryReducer = (
  state = { isLoading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_CATEGORY:
      return { ...state, category: action.payload };
    case FETCH_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE:
      return { ...state, categories: [...state.categories, action.payload] };
    case DELETE:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload
        ),
      };
    case UPDATE:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category._id === action.payload._id ? action.payload : category
        ),
      };
    default:
      return state;
  }
};

export default categoryReducer;
