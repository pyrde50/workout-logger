import { configureStore } from '@reduxjs/toolkit';
import msgReducer from './reducers/msgReducer';

import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    msg: msgReducer,
  },
});
