import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobDetailsData, Jobs,  vendorReviews } from "utils/types";


const initialState:JobDetailsData={
    job:null,
    vendorReviews:null
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
        }
    }
})


export const {setJobsDetails,setVendorReviews}=jobDetailsSlice.actions
export default jobDetailsSlice.reducer
