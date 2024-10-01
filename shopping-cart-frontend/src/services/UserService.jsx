import axios from "axios";

const URL='http://localhost:8088/user';

export const userSignUp=(user)=>{
    return axios.post(URL+"/signUp",user);
}

export const userLogin=(user)=>{
    return axios.post(URL+"/login",user);
}