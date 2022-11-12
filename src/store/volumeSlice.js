import { createSlice } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
    name: "volume",
    initialState: {
        volume: 50
    },
    reducers: {
        changeVolume(state, action){
            state.volume = parseInt(action.payload);
        }
    }
});



export const volumeActions = volumeSlice.actions;
export default volumeSlice;
