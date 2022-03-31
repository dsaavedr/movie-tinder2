import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import usersReducer from "../reducers/users.reducer";
import authReducer from "../reducers/auth.reducer";
import registerReducer from "../reducers/register.reducer";
import alertReducer from "../reducers/alert.reducer";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        register: registerReducer,
        alert: alertReducer
    },
    middleware: [createLogger(), thunkMiddleware]
});
