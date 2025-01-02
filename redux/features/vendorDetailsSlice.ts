import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Documents, Reviews, Users, VendorDetailsData } from "utils/types";


const initialState:VendorDetailsData= {
     user:null,
      reviewCount:null,
      avgRating:null,
      documents:[],
      reviews:[],
}

const vendorDetailsSlice = createSlice({
    name:'vendorDetails',
    initialState,
    reducers:{
       setVendorDetails:(state,action:PayloadAction<Users>)=>{
        state.user=action.payload
       },
         setReviewCount:(state,action:PayloadAction<number>)=>{
          state.reviewCount=action.payload
         },
         setAvgRating:(state,action:PayloadAction<string>)=>{
            state.avgRating=action.payload
         },
         setDocuments:(state,action:PayloadAction<Documents[]>)=>{
                state.documents=action.payload
         },
         setReviews:(state,action:PayloadAction<Reviews[]>)=>{
            state.reviews=action.payload
         }


    }

})


export const {setVendorDetails,setReviewCount,setAvgRating,setDocuments,setReviews} = vendorDetailsSlice.actions
export default vendorDetailsSlice.reducer