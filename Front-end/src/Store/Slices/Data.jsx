 import {createSlice} from "@reduxjs/toolkit"
 const DataSlice=createSlice({
    name:"Data",
    initialState:false,
    reducers:{
        Tog:(state)=>{
            return !state;
        }
    }
 })
 export default DataSlice.reducer;
 export const {Tog}=DataSlice.actions;