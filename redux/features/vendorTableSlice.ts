import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vendor, VendorSlice } from "utils/types";


const initialState:VendorSlice = {
    vendors:[],
    vendors_inactive:[],
    total_inactiveVendors:0,
    total_vendors:0
}

const vendorTableSlice = createSlice({
    name:'vendorTable',
    initialState,
    reducers:{
        setVendors:(state,action:PayloadAction<Vendor[]>)=>{
            state.vendors=action.payload
        },
        setInactiveVendors:(state,action:PayloadAction<Vendor[]>)=>{
            state.vendors_inactive=action.payload
        },
        setTotalInActiveVendors:(state,action:PayloadAction<number>)=>{
            state.total_inactiveVendors=action.payload
        },
        setTotalVendors:(state,action:PayloadAction<number>)=>{
            state.total_vendors=action.payload
        },
        clearVendors:(state)=>{
            state.total_vendors=0
            state.vendors=[]
        },
        clearInactiveVendors:(state)=>{
            state.total_inactiveVendors=0
            state.vendors_inactive=[]
        }
    }
})

export const { setVendors,setTotalVendors ,clearVendors,setInactiveVendors,setTotalInActiveVendors,clearInactiveVendors } = vendorTableSlice.actions;
export default vendorTableSlice.reducer;