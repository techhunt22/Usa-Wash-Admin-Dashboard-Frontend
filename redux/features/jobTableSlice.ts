import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Job, jobTableSlice } from "utils/types";




const initialState:jobTableSlice={
    jobs:[],
    filteredJobs:[],
    totalPages:0,
}

const tableSlice=createSlice({
    name:'jobTable',
    initialState,
    reducers:{
        setJobs:(state,action:PayloadAction<Job[]>)=>{
            state.jobs=action.payload
            state.filteredJobs=action.payload
        },
        setTotalPages:(state,action:PayloadAction<number>)=>{
            state.totalPages=action.payload
        },
        filterJobs: (state, action: PayloadAction<{ searchQuery: string; jobType: string; minBudget: number; maxBudget: number; status: string }>) => {
            const { searchQuery, jobType, minBudget, maxBudget, status } = action.payload;
            state.filteredJobs = state.jobs.filter((job) => {
              return (
                job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (jobType ? job.job_title === jobType : true) &&
                job.budget >= minBudget &&
                job.budget <= maxBudget &&
                (status ? job.status === status : true)
              );
            });
          },
    }

})

export const { setJobs, setTotalPages, filterJobs } = tableSlice.actions;
export default tableSlice.reducer;