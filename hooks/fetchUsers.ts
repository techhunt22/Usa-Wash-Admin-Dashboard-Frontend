import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = (reduxToken:string|null):string | null=>{
    if(reduxToken){
        return reduxToken;
    }
    if(typeof window !== 'undefined'){
        const localToken = localStorage.getItem('token');
        if(localToken){
            return localToken;
        }
    }
    return null;
}

const fetchUserData = async (url:string,token:string|null,page:number)=>{
    
    if (!token) {
        throw new Error('No authentication token available');
    }
    try {
        const response=await axios.get(`${API_URL}${url}?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response?.data;
    } catch (error) {
        throw error;
    }
}

export const useFetchUserData = (url:string,page:number) =>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: [url, page, token], 
        queryFn: () => fetchUserData(url, token, page),
        enabled: !!token,
        retry: (failureCount, error) => {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return false;
            }
            return failureCount < 3;
        },
        staleTime: 5 * 60 * 1000,
    })
}


const useAuthToken = ()=>{
    const reduxToken = useSelector((state:RootState)=>state.auth.token);
    return getToken(reduxToken);
}