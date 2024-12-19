import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import { AdminLoginProps } from "./types";

const API_URL=process.env.NEXT_PUBLIC_API_URL


// Post Requests

export const AdminLogin = async(data:AdminLoginProps)=>{
    const response = await axios.post(`${API_URL}/api/v1/login`,data)
    return response?.data
}

export const useAdminLogin = ()=>{
    return useMutation({
        mutationFn:AdminLogin
    })
 }