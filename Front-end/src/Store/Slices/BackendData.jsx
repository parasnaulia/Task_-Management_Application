import { createSlice } from "@reduxjs/toolkit"
const BackendData=createSlice({
    name:"Data",
    initialState:false,
    reducers:{
        AddBackData:(state)=>{
            return !state;
        }
    }

})
export default BackendData.reducer;
export const {AddBackData}=BackendData.actions;