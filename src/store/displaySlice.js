import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ""
}

const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        changeText(state, action){
            state.text = action.payload;
        },
    }
});


export const displayActions = displaySlice.actions;
export default displaySlice;
