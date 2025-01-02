import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnalyticsProps } from "utils/types";


const initialState:AnalyticsProps = {
    totalCustomers:null,
    totalVendors:null,
    totalUsers:null,
    totalInactiveVendors:null,
    totalJobs:null,
}

const analyticsSlice = createSlice({
    name:'analytics',
    initialState,
    reducers:{
        setTotalCustomers:(state,action:PayloadAction<number>)=>{
            state.totalCustomers=action.payload
            localStorage.setItem('totalCustomers',action.payload.toString())
        },
        setTotalVendors:(state,action:PayloadAction<number>)=>{
            state.totalVendors=action.payload
            localStorage.setItem('totalVendors',action.payload.toString())
        },
        setTotalInactiveVendors:(state,action:PayloadAction<number>)=>{
            state.totalInactiveVendors=action.payload
            localStorage.setItem('totalInactiveVendors',action.payload.toString())
        },
        setTotalUsers:(state,action:PayloadAction<number>)=>{
            state.totalUsers=action.payload
            localStorage.setItem('totalUsers',action.payload.toString())
        },
        setTotalJobs:(state,action:PayloadAction<number>)=>{
            state.totalJobs=action.payload
            localStorage.setItem('totalJobs',action.payload.toString())
        },
    }

})

export const {setTotalCustomers,setTotalInactiveVendors,setTotalUsers,setTotalVendors,setTotalJobs} = analyticsSlice.actions
export default analyticsSlice.reducer