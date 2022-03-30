import { createSlice } from "@reduxjs/toolkit";
import { userConstants } from "../constants";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    loggedIn: user !== null,
    user,
    loggingIn: false
};

export const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        [userConstants.LOGIN_REQUEST]: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.loggingIn = true;
        },
        [userConstants.LOGIN_SUCCESS]: (state, action) => {
            state.loggingIn = false;
            state.loggedIn = true;
            state.user = action.user;
        },
        [userConstants.LOGIN_FAILURE]: (state, action) => {
            state.loggingIn = false;
        },
        [userConstants.LOGOUT]: (state, action) => {
            state.user = null;
            state.loggedIn = false;
        }
    }
});

export default authSlice.reducer;
