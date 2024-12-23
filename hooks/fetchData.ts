import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = (reduxToken: string | null): string | null => {
    if (reduxToken) {
        return reduxToken;
    }
    if (typeof window !== 'undefined') {
        const localToken = localStorage.getItem('token');
        if (localToken) {
            return localToken;
        }
    }
    return null;
};

export const FetchData = async (url: string, token: string | null, page: number) => {
    if (!token) {
        throw new Error('No authentication token available');
    }
    try {
        const response = await axios.get(`${API_URL}${url}?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response?.data;
    } catch (error) {
        throw error;
    }
};

export const useFetchData = (url: string, page: number) => { 
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: [url, page, token], 
        queryFn: () => FetchData(url, token, page),
        enabled: !!token,
        retry: (failureCount, error) => {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return false;
            }
            return failureCount < 3;
        },
        staleTime: 5 * 60 * 1000, 
    });
};

export const FetchFilterData = async (url: string, token: string | null, params: Record<string, any> = {}) => {
    if (!token) {
        throw new Error('No authentication token available');
    }
    try {
        const response = await axios.get(`${API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params
        });
        return response?.data;
    } catch (error) {
        throw error;
    }
};

export const useFetchFilterData = (url: string, status: string, min_budget: number, max_budget: number, service_id: number) => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    const params = {
        status,
        min_budget,
        max_budget,
        service_id,
    };
    return useQuery({
        queryKey: [url, token, params], 
        queryFn: () => FetchFilterData(url, token, params),
        enabled: !!token,
        retry: (failureCount, error) => {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return false;
            }
            return failureCount < 3;
        },
        staleTime: 5 * 60 * 1000, 
    });
};

export const useAuthToken = () => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    return getToken(reduxToken);
};

export const useToken = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    return token;
};