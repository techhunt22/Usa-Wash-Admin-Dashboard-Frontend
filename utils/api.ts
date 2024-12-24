import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AdminLoginProps } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

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


export const useAuthToken = () => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    return getToken(reduxToken);
};

export const useToken = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    return token;
};

// Post Requests

export const AdminLogin = async (data: AdminLoginProps) => {
    const response = await axios.post(`${API_URL}/api/v1/login`, data);
    return response?.data;
};

export const useAdminLogin = () => {
    return useMutation({
        mutationFn: AdminLogin
    });
};

export const AdminLogout = async (token: string|null) => {
    if (!token) {
        throw new Error("No authentication token available");
    }

    const response = await axios.post(
        `${API_URL}/api/v1/account/logout`,
        {}, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response?.data;
};


export const useAdminLogout = (onSuccess: () => void) => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useMutation({
        mutationFn: () => AdminLogout(token), 
        onSuccess,
        onError: (error) => {
            console.error("Logout failed:", error);
        },
    });
};


// Get Request 

// Job  Table Api 

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

export const FetchService = async (url:string,token:string|null) => {
    if (!token) {
        throw new Error('No authentication token available');
    }
    try {
        const response = await axios.get(`${API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response?.data;
    } catch (error) {
        throw error;
    }

}

export const useFetchService = (url:string)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: [url,token],
        queryFn: () => FetchService(url,token),
        enabled: !!token,
        retry: (failureCount, error) => {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return false;
            }
            return failureCount < 3;
        },
        staleTime: 5 * 60 * 1000,
    });

}

