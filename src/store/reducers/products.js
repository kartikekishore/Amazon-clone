import {
  FETCH_PRODUCT,
  FETCH_ALL_PRODUCTS,
  FETCH_BY_CATEGORY,
  START_LOADING,
  END_LOADING,
  CREATE,
  UPDATE,
  DELETE,
} from "../actions/types";

const productReducer = (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_ALL_PRODUCTS:
    case FETCH_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case UPDATE:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
