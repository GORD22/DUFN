import { configureStore } from '@reduxjs/toolkit';
import increment from './CountSlice';

export const store = configureStore({
    reducer: increment
})