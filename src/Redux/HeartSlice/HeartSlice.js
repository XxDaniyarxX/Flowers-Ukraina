// filepath: /src/Redux/HeartSlice/HeartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    heartCount: 0,
    hearts: {},
};

const heartSlice = createSlice({
    name: 'heart',
    initialState,
    reducers: {
        toggleHeart: (state, action) => {
            const id = action.payload;
            state.hearts[id] = !state.hearts[id];
            state.heartCount += state.hearts[id] ? 1 : -1;
        },
    },
});

export const { toggleHeart } = heartSlice.actions;
export default heartSlice.reducer;