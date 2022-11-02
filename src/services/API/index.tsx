import axios from 'axios';

const TOKEN_API = '4aed9df3f0686e9061d3735372c2b523';
const BASE_URL = `https://api.themoviedb.org/3/`;
export const BASE_URL_IMAGE = `https://image.tmdb.org/t/p/w500/`;

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

export const movies: Function = (type: string, page?: string) => {
    const havePage = page === undefined ? '' : `&page=${page}`;
    const req = axios.create({
        baseURL: `${BASE_URL}movie/${type}?api_key=${TOKEN_API}&language=pt-BR${havePage}`,
    });
    return req.post('');
};

export const series: Function = (type: string, page?: string) => {
    const req = axios.create({
        baseURL: `${BASE_URL}tv/${type}?api_key=${TOKEN_API}&language=pt-BR${
            page !== undefined && `&page=${page}`
        }`,
    });
    return req.post('');
};
