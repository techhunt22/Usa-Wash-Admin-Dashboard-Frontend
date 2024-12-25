import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerSlice,Customer } from "utils/types";


const initialState:CustomerSlice = {
    customers:[],
    total_users:0
}
const CustomerTableSlice = createSlice({
    name:'customerTable',
    initialState,
    reducers:{
        setCustomers:(state,action:PayloadAction<Customer[]>)=>{
            state.customers=action.payload
        },
        setTotalUsers:(state,action:PayloadAction<number>)=>{
            state.total_users=action.payload
        },
        clearCustomers:(state)=>{
            state.customers=[]
            state.total_users=0
        }

    }
})

export const { setCustomers,setTotalUsers ,clearCustomers } = CustomerTableSlice.actions;
export default CustomerTableSlice.reducer;