import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Job, jobTableSlice } from "utils/types";




const initialState:jobTableSlice={
    jobs:[],
    totalPages:0,
}

const tableSlice=createSlice({
    name:'jobTable',
    initialState,
    reducers:{
        setJobs:(state,action:PayloadAction<Job[]>)=>{
            state.jobs=action.payload
        },
        setTotalPages:(state,action:PayloadAction<number>)=>{
            state.totalPages=action.payload
        },
        clearJobs:(state)=>{
          state.jobs=[]
          state.totalPages=0
        }
      
    }

})

export const { setJobs, setTotalPages,clearJobs } = tableSlice.actions;
export default tableSlice.reducer;