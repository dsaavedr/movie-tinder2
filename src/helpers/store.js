import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import usersReducer from "../reducers/users.reducer";

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [createLogger()]
});
