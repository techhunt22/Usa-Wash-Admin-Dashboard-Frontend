import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const API_URL=process.env.NEXT_PUBLIC_API_URL

export const FetchData = async(url:string,token:string)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchData = (url:string,page:number)=>{
    // const token = useSelector((state:RootState) => state?.auth?.token);
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return useQuery({
        queryKey:[url,page],
        queryFn:()=>FetchData(url,token!)
    })
  
}