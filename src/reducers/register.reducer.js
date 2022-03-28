import { createSlice } from "@reduxjs/toolkit";
import { userConstants } from "../constants";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {},
    reducers: {
        [userConstants.REGISTER_REQUEST]: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.registering = true;
        },
        [userConstants.REGISTER_SUCCESS]: (state, action) => {
            state = {};
        },
        [userConstants.REGISTER_FAILURE]: (state, action) => {
            state = {};
        },
        [userConstants.LOGOUT]: (state, action) => {
            state = {};
        }
    }
});

export default registrationSlice.reducer;
