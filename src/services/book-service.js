import axios from 'axios';

export const getAll = () => {
    const url = `${import.meta.env.VITE_API_URL}/api/favorite-books/books`;
    const request = axios.get(url);
    return request.then(response => response.data);
}
export const addBook = (title) => {
    const url = `${import.meta.env.VITE_API_URL}/api/favorite-books/books`;
    const request = axios.post(url, {title});
    return request.then(response => response.data);
}

export const getBookByRace = (race) => {
    const url = `${import.meta.env.VITE_API_URL}?race=${race}`;
    const request = axios.post(url);
    return request.then(response => response.data);
}
