import axios from 'axios';

export const getCardByName = (name) => {
    const url = `${import.meta.env.VITE_API_URL}?fname=${name}`;
    const request = axios.post(url, name);
    return request.then(response => response.data);
}
