import axios from "axios";

const URL='http://localhost:8088/user';

// Set up Axios to include cookies (for session-based auth)
axios.defaults.withCredentials = true;

export const userSignUp=(user)=>{
    return axios.post(URL+"/signUp",user);
}

export const userLogin=(user)=>{
    return axios.post(URL+"/login",user);
}