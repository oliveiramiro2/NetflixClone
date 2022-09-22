import axios from 'axios';

const TOKEN_API = '4aed9df3f0686e9061d3735372c2b523';
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

interface IAuthUser {
    login: string;
    password: string;
}

export const auth: Function = (data: IAuthUser) => {
    const req = axios.create({
        baseURL: '/',
    });
    return req.post('/auth', data);
};

export const movies: Function = (type: string, page: string) => {
    const req = axios.create({
        baseURL: `${BASE_URL}${type}?api_key=${TOKEN_API}&language=pt-BR&page=${page}`,
    });
    return req.post('');
};
