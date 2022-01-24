import axios from "axios";

const API = axios.create({
  baseURL: "https://fswi-amazon-clone.herokuapp.com",
});

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchProducts = () => API.get("/products");

export const fetchProductsByCategory = (id) =>
  API.get(`/categories/${id}/products`);
export const fetchCategory = (id) => API.get(`/categories/${id}`);
export const fetchCategories = () => API.get("/categories");
