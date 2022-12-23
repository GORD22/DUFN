import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'counter',
    initialState: 1,

    reducers: {
        increment: state => state + 1,
    },
});

export const {increment} = countSlice.actions;

export default countSlice.reducer;