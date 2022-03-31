import { createSlice } from "@reduxjs/toolkit";
import { alertConstants } from "../constants";

export const alertSlice = createSlice({
    name: "alert",
    initialState: {
        type: "",
        message: ""
    },
    reducers: {
        [alertConstants.SUCCESS]: (state, action) => {
            state.type = "success";
            state.message = action.message;
        },
        [alertConstants.ERROR]: (state, action) => {
            state.type = "error";
            state.message = action.message;
        },
        [alertConstants.WARNING]: (state, action) => {
            state.type = "warning";
            state.message = action.message;
        },
        [alertConstants.CLEAR]: (state, action) => {
            state.type = "";
            state.message = "";
        }
    }
});

export default alertSlice.reducer;
