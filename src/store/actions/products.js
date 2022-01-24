import * as api from "../../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_PRODUCT,
  FETCH_ALL_PRODUCTS,
  FETCH_BY_CATEGORY,
  START_LOADING,
  END_LOADING,
} from "../actions/types";

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH_PRODUCT, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchProductsByCategory(category);
    dispatch({ type: FETCH_BY_CATEGORY, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (product, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createProduct(product);
    history.push(`/products/${data._id}`);
    dispatch({ type: CREATE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
