import axios from "axios";

const api = axios.create({
  baseURL : "http://localhost:8080",
});

// Get Method
export const getProducts = () => {
  return api.get("/product");
};

// Post Method
export const addProduct = (data) => {
  return api.post("/product", data);
};

// Delete Method
export const deleteProduct = (id) =>{
  return api.delete(`/product/${id}`);
}

// Update Method
export const updateProduct = (data) => {
  return api.put("/product",data);
}
