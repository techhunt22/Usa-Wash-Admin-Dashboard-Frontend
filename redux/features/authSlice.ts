import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "utils/types";


const initialState:AuthState = {
    token: null,
   data:{
    name:null,
    image:null,
    id:null,
    email:null
   }
}

const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
            state.token=action.payload
            localStorage.setItem('token', action.payload);
        },
        clearToken:(state)=>{
            state.token=null
            localStorage.removeItem('token');
        },
        setData:(state,action)=>{
            state.data.name=action.payload.name
            state.data.image=action.payload.image
            state.data.email=action.payload.email
            state.data.id=action.payload.id
        },
        clearData:(state)=>{
            state.data.name=null
        },
        SetName:(state,action)=>{
            state.data.name=action.payload
        }
    }
})

export const { setToken, clearToken,setData,clearData,SetName } = authSlice.actions;
export default authSlice.reducer;