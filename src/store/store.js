import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";
import volumeSlice from "./volumeSlice";

const store = configureStore({
    reducer:{
        displayReducer: displaySlice.reducer,
        volumeReducer: volumeSlice.reducer
    }
});

export default store;
