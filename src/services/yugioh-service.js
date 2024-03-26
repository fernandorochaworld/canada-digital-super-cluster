import axios from 'axios';

export const getCardByName = (name) => {
    const url = `${import.meta.env.VITE_API_URL}?fname=${name}`;
    const request = axios.get(url);
    return request.then(response => response.data);
}

export const getCardByRace = (race) => {
    const url = `${import.meta.env.VITE_API_URL}?race=${race}`;
    const request = axios.post(url);
    return request.then(response => response.data);
}
