import {configureStore} from "@reduxjs/toolkit";
import FlowersReducer from "./FlowersApi/FlowersSlice.js";


const store = configureStore({
    reducer: {
        flowers: FlowersReducer,
    }
})
export default store;