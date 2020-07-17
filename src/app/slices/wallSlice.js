import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const wallSlice = createSlice({
    name: 'wall',
    initialState: {
        posts: [
        ]
    },
    reducers: {
        update: (state, action) => {
            state.posts = action.payload.reverse();
        }
    }
});

export const { update } = wallSlice.actions;

export const retrivePosts = () => dispatch => {
    const url = `${API_URL}/posts/`;
    return axios.get(url
    ).then(({ data }) => {
        debugger
        dispatch(update(data))
    });
};
export default wallSlice.reducer;
