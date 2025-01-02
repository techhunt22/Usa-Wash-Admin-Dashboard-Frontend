import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { job_applications, JobDetailsData, Jobs,  vendorReviews } from "utils/types";


const initialState:JobDetailsData={
    job:null,
    vendorReviews:null,
    job_applications:null
}

const jobDetailsSlice = createSlice({
    name:'jobDetails',
    initialState,
    reducers:{
        setJobsDetails:(state,action:PayloadAction<Jobs>)=>{
            state.job=action.payload
        },
        setVendorReviews:(state,action:PayloadAction<vendorReviews>)=>{
            state.vendorReviews=action.payload
        },
        setJobApplications:(state,action:PayloadAction<job_applications[]>)=>{
            state.job_applications=action.payload
        }
    }
})


export const {setJobsDetails,setVendorReviews,setJobApplications}=jobDetailsSlice.actions
export default jobDetailsSlice.reducer
