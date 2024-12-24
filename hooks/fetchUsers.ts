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


const fetchUserData1= async (url:string,type:string,token:string|null,page:number)=>{
    const data = await axios.get(`${API_URL}${url}?page=${page}`,{
        params:{
            type
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data
}

export const useFetchUserData1 = (url:string,type:string,page:number)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey:[url,type,page],
        queryFn:()=>fetchUserData1(url,type,token,page)
    })
}






const useAuthToken = ()=>{
    const reduxToken = useSelector((state:RootState)=>state.auth.token);
    return getToken(reduxToken);
}