import axios from "axios";

const API = axios.create({
  baseURL: "https://fswi-amazon-clone.herokuapp.com",
});
API.interceptors.request.use((req) => {

  return req;
});
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchProducts = () => API.get("/products");
export const createProduct = (newProduct) => API.post("/products", newProduct);
export const updateProduct = (id, updatedProduct) =>
  API.put(`/products/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const fetchProductsByCategory = (id) =>
  API.get(`/categories/${id}/products`);
export const fetchCategory = (id) => API.get(`/categories/${id}`);
export const fetchCategories = () => API.get("/categories");
export const createCategory = (newCategory) =>
  API.post("/categories", newCategory);
export const updateCategory = (id, updatedCategory) =>
  API.put(`/categories/${id}`, updatedCategory);
export const deleteCategory = (id) => API.delete(`/categories/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
