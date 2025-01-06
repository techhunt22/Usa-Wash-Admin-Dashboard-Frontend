import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AdminLoginProps, GraphProps, JobTableFilterProps, UserFilterProps, VendorApprovalFilterProps } from "./types";
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


 const useAuthToken = () => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    return getToken(reduxToken);
};

export const useToken = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    return token;
};

// --------- Post Requests

 const AdminLogin = async (data: AdminLoginProps) => {
    const response = await axios.post(`${API_URL}/api/v1/login`, data);
    return response?.data;
};

export const useAdminLogin = () => {
    return useMutation({
        mutationFn: AdminLogin
    });
};

 const AdminLogout = async (token: string|null) => {
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


// User (Activate,DeActive,,Ban) 

const userRequest = async (url:string,token:string|null,id:number,status:string)=>{
    const payload = {
        _method:'PUT'
    }
    const response = await axios.post(`${API_URL}${url}/${id}/${status}`,payload,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useUserRequest = (url:string,id:number,status:string)=> {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useMutation({
        mutationFn:()=>userRequest(url,token,id,status)
    })
}


// Delete (User)

const deleteRequest= async (url:string,id:number,token:string|null)=>{
    const response = await axios.delete(`${API_URL}${url}/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useDeleteRequest = (url:string,id:number)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useMutation({
        mutationFn:()=>deleteRequest(url,id,token)
    })
}


// Job (Mark As Completed)

const jobCompleted = async (url:string,token:string|null)=>{
    const payload = {
        _method:'PUT'
    }
    const response  = await axios.post(`${API_URL}${url}`,payload,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useJobCompleted = (url:string)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useMutation({
        mutationKey:[url,token],
        mutationFn:()=>jobCompleted(url,token)
    })
}

// -------- Get Request 

const fetchDetails = async(url:string,id:string|undefined,token:string|null)=>{
    const response = await axios.get(`${API_URL}${url}/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchDetails= (url:string,id:string|undefined)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: ['users',url,id,token],
        queryFn: () => fetchDetails(url,id,token),
        
    });
}


// Job  Table Api 

const fetchJobs=async(url:string,params:JobTableFilterProps,token:string|null)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        params:{
            ...params
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchJobs = (url:string,params:JobTableFilterProps,dependencies: unknown[])=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: ["jobs",url, params, ...dependencies],
        queryFn: () => fetchJobs(url, params,token),
      
    });
}

const FetchService = async (url:string,token:string|null) => {
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

const fetchStatus = async (url:string,token:string|null) => {
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

export const useFetchStatus = (url:string)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: [url,token],
        queryFn: () => fetchStatus(url,token),
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



// User Apis (Customer And Vendor) 

const fetchUsers = async (url:string,token:string|null,params:UserFilterProps)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        params:{
          ...params
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchUsers = (url: string, params: UserFilterProps, dependencies: unknown[]) => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: ['users',url, params, ...dependencies],
        queryFn: () => fetchUsers(url, token, params),
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

const fetchInactiveVendors = async (url:string,token:string|null,params:VendorApprovalFilterProps)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        params:{
          ...params
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchInactiveVendors = (url: string, params: VendorApprovalFilterProps, dependencies: unknown[]) => {
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey: [url, params, ...dependencies],
        queryFn: () => fetchInactiveVendors(url, token, params),
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


// Get Analytics 

const fetchApplicationData=async (url:string,token:string|null)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data
}

export const useFetchApplicationData = (url:string)=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey:[url],
        queryFn:()=>fetchApplicationData(url,token),
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

const JobActivity = async (url:string,token:string|null,params:GraphProps)=>{
    const response = await axios.get(`${API_URL}${url}`,{
        params:{
           ...params
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response?.data?.data
}

export const useJobActivity =  (url:string,params:GraphProps,dependencies: unknown[])=>{
    const reduxToken = useSelector((state: RootState) => state.auth.token);
    const token = getToken(reduxToken);
    return useQuery({
        queryKey:[url,token,dependencies],
        queryFn:()=>JobActivity(url,token,params)
    })

}


