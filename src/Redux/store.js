import {configureStore} from "@reduxjs/toolkit";
import FlowersReducer from "./FlowersApi/FlowersSlice.js";
import HeartSlice from './HeartSlice/HeartSlice.js'

const store = configureStore({
    reducer: {
        flowers: FlowersReducer,
        heart: HeartSlice
    }
})
export default store;