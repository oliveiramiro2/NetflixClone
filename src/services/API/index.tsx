import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

interface IAuthUser {
    login: string;
    password: string;
}

export const auth: Function = (data: IAuthUser) => {
    const req = axios.create({
        baseURL: BASE_URL,
    });
    return req.post('/auth', data);
};
