import * as api from "../../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_CATEGORY,
  FETCH_ALL_CATEGORIES,
  START_LOADING,
  END_LOADING,
} from "../actions/types";

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCategory(id);
    dispatch({ type: FETCH_CATEGORY, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCategories();
    dispatch({ type: FETCH_ALL_CATEGORIES, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// export const getCategoriesByCategory = (searchQuery) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });

//     const {
//       data: { data },
//     } = await api.fetchCategoriesBiesearch(searchQuery);
//     dispatch({ type: FETCH_BY_SEARCH, payload: data });

//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createCategory = (category, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createCategory(category);
    history.push(`/categories/${data._id}`);
    dispatch({ type: CREATE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = (id, category) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, category);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
