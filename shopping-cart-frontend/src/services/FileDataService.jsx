import axios from "axios";

const URL='http://localhost:8088/image';

export const downloadImage = (filename) => {
    return axios.get(`${URL}/downloadFile/${filename}`, { responseType: 'arraybuffer' });
};