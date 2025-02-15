import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://679b8d3933d31684632445c9.mockapi.io/flowers/flowers';

export const fetchFlowers = createAsyncThunk('flowers/fetchFlowers', async () => {
    const response = await axios.get(api);
    return response.data;
});

const flowersSlice = createSlice({
    name: 'flowers',
    initialState: {
        data: [],
        error: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlowers.pending, (state) => {
                state.loading = 'true';
            })
            .addCase(fetchFlowers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFlowers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default flowersSlice.reducer;