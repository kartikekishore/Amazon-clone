import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import productReducer from "./reducers/products";
import categoryReducer from "./reducers/category";
import cartReducer from "./reducers/cart";


const combinedReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(
  combinedReducer,
  bindMiddleware([thunkMiddleware])
); 
