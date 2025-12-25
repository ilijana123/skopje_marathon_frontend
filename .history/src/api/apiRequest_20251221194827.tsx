import axios, { AxiosResponse} from 'axios';
import.meta.env.VITE_API_URL 

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, 
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
    