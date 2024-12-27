import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users, UserDetailsData, Job } from "utils/types";

const initialState:UserDetailsData = {
    user:null,
    jobs:[],
    totalJobsPosted:0,
    totalPages:0

}

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState,
    reducers:{
        setUserDetails:(state,action:PayloadAction<Users>)=>{
            state.user=action.payload
        },
        setTotalJobsPosted:(state,action:PayloadAction<number>)=>{
            state.totalJobsPosted=action.payload
        },
        setUserJobs:(state,action:PayloadAction<Job[]>)=>{
            state.jobs=action.payload
        },
        setTotalPages:(state,action:PayloadAction<number>)=>{
            state.totalPages=action.payload
        }
    }

})

export const {setUserDetails,setTotalJobsPosted,setUserJobs,setTotalPages} = userDetailsSlice.actions
export default userDetailsSlice.reducer