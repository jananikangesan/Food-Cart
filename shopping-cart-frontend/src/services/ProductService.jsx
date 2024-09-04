import axios from "axios";

const REST_API_BASE_URL='http://localhost:8088/product';

export const listProducts=()=>{
    return axios.get(REST_API_BASE_URL+'/showAll');
}