import { createSlice } from "@reduxjs/toolkit";

const initialState = { user:  null }

// State slice for user credentails
// https://react-redux.js.org/tutorials/quick-start#create-a-redux-state-slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;