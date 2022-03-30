import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import usersReducer from "../reducers/users.reducer";
import authReducer from "../reducers/auth.reducer";
import registerReducer from "../reducers/register.reducer";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        register: registerReducer
    },
    middleware: [createLogger(), thunkMiddleware]
});
