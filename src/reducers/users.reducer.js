import { createSlice } from "@reduxjs/toolkit";
import { userConstants } from "../constants";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        items: [],
        loading: false
    },
    reducers: {
        [userConstants.GETALL_REQUEST]: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.loading = true;
        },
        [userConstants.GETALL_SUCCESS]: (state, action) => {
            state.items = action.users;
        },
        [userConstants.GETALL_FAILURE]: (state, action) => {
            state.error = action.error;
        },
        [userConstants.DELETE_REQUEST]: (state, action) => {
            state.items = state.items.map(user =>
                user.id === action.id ? { ...user, deleting: true } : user
            );
        },
        [userConstants.DELETE_SUCCESS]: (state, action) => {
            state.items = state.items.map(user => user.id !== action.id);
        },
        [userConstants.DELETE_FAILURE]: (state, action) => {
            state.items = state.items.map(user => {
                if (user.id !== action.id) return user;

                delete user.deleting;
                return { ...user, deleteError: action.error };
            });
        }
    }
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsers = state => state.items;

export default userSlice.reducer;
