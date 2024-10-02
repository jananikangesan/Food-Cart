import axios from "axios";

const REST_API_BASE_URL='http://localhost:8088/product';

// Configure Axios to allow sending cookies
axios.defaults.withCredentials = true;

export const listProducts=()=>{
    return axios.get(REST_API_BASE_URL+'/showAll');
}

export const saveProducts=(formData)=>{
    return axios.post(REST_API_BASE_URL+"/addProduct",formData);
}

export const deleteProduct=(productId)=>{
    return axios.delete(REST_API_BASE_URL+"/deleteProduct/"+productId);
}

export const updateProduct=(formData,productId)=>{
    return axios.put(REST_API_BASE_URL+`/updateProduct/${productId}`,formData,productId);
}

export const getProduct=(productId)=>{
    return axios.get(REST_API_BASE_URL+`/getProduct/${productId}`);
}
