import {
  CREATE,
  DELETE,
  START_LOADING,
  END_LOADING,
} from "../actions/types";

export const addItemToCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    dispatch({ type: CREATE, payload: item });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItemFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
