import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import loginReducer from './loginState';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    LoginState: loginReducer,
  },
})