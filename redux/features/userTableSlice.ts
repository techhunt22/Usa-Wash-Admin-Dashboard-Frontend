import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSlice,User } from "utils/types";


const initialState:UserSlice = {
    users:[],
    total_users:0
}
const UserTableSlice = createSlice({
    name:'userTable',
    initialState,
    reducers:{
        setUsers:(state,action:PayloadAction<User[]>)=>{
            state.users=action.payload
        },
        setTotalUsers:(state,action:PayloadAction<number>)=>{
            state.total_users=action.payload
        },
        clearUsers:(state)=>{
            state.users=[]
            state.total_users=0
        }

    }
})

export const { setUsers,setTotalUsers ,clearUsers } = UserTableSlice.actions;
export default UserTableSlice.reducer;