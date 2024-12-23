import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User, UsersSlice } from "utils/types";



const initialState:User = {
  user:[]
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers : {
        setUsers:(state,action:PayloadAction<UsersSlice[]>)=>{
            state.user=action.payload
        }
    }
})

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;