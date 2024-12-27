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
        },
        setTotalVendors:(state,action:PayloadAction<number>)=>{
            state.totalVendors=action.payload
        },
        setTotalInactiveVendors:(state,action:PayloadAction<number>)=>{
            state.totalInactiveVendors=action.payload
        },
        setTotalUsers:(state,action:PayloadAction<number>)=>{
            state.totalUsers=action.payload
        },
        setTotalJobs:(state,action:PayloadAction<number>)=>{
            state.totalJobs=action.payload
        },
    }

})

export const {setTotalCustomers,setTotalInactiveVendors,setTotalUsers,setTotalVendors,setTotalJobs} = analyticsSlice.actions
export default analyticsSlice.reducer