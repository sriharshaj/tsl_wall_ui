import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import wallReducer from './slices/wallSlice';
import errorReducer from './slices/errorSlice';
import flagReducer from './slices/flagSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    wall: wallReducer,
    error: errorReducer,
    flag: flagReducer
  },
});
