import axios, { AxiosResponse} from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL; 

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const apiRequest = async <T,>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient({
        method,
        url,
        data,
    });
    return response.data;
};
    