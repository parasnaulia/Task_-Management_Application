import {configureStore} from "@reduxjs/toolkit";
import Data from "./Slices/Data"
import BackendData from "./Slices/BackendData";
const Store=configureStore({
    reducer:{
        Data:Data,
        BackendData:BackendData
    }
});
export default Store;