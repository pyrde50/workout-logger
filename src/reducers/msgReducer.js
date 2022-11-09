import { createSlice } from '@reduxjs/toolkit';

const initialState = { msg: null };

// State slice for user credentails
// https://react-redux.js.org/tutorials/quick-start#create-a-redux-state-slice
export const msgSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    showMessage(state, action) {
      state.msg = action.payload;
    },
    hideMessage(state) {
      state.msg = null;
    },
  },
});

export const { showMessage, hideMessage } = msgSlice.actions;

export default msgSlice.reducer;
