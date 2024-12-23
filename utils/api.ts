import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AdminLoginProps } from "./types";
import { useToken } from "../hooks/fetchData";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    const token = useToken(); 
    return useMutation({
        mutationFn: () => AdminLogout(token), 
        onSuccess,
        onError: (error) => {
            console.error("Logout failed:", error);
        },
    });
};