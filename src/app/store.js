import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import questionReducer from '../features/question/questionSlice';
import { authentication } from './middleware/auth';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    question: questionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authentication),
});
