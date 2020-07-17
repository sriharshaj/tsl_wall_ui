import { createSlice } from '@reduxjs/toolkit';

export const flagSlice = createSlice({
    name: 'flags',
    initialState: {
        post_created: false
    },
    reducers: {
        unSetPostCreation: (state) => {
            state.post_created = false;
        },
        setPostCreation: (state) => {
            state.post_created = true;
        }
    }
});

export const { unSetPostCreation, setPostCreation } = flagSlice.actions;

export default flagSlice.reducer;
