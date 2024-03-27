import axios from 'axios';
const baseUrl = `${import.meta.env.VITE_API_URL}/api/favorite-books/books`;

export const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}
export const addBook = (title) => {
    const request = axios.post(baseUrl, {title});
    return request.then(response => response.data);
}

export const removeBook = (book) => {
    const request = axios.delete(`${baseUrl}/${book.id}`);
    return request.then(response => response.data);
}
