import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './store/counterSlice';
import questionReducer from './store/questionSlice';
import userSlice from './store/userSlice';
import { middleware } from './middleware/auth';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    question: questionReducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
