import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

export const getPosts = () => {
    return axios.get(`${ENV}/posts`);
};
  
export const updatePost = (id, data) => {
    return axios.put(`${ENV}/posts/${id}`, data);
};