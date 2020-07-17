import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { setPostCreation } from './flagSlice';
import {
    setPostCreateErrorMessage,
    setRegisterErrMsgs,
    setLoginErrMsgs
} from './errorSlice';

const API_URL = 'http://localhost:8000/api';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login_error_message: null,
        logged_in: localStorage.getItem('token') ? true : false,
        username: null,
        email: null,
        posts: []
    },
    reducers: {
        login: (state, { payload }) => {
            localStorage.setItem('token', payload.token);
            state.username = payload.username;
            state.email = payload.email;
            state.logged_in = true;
            state.login_error_message = null;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.username = null;
            state.email = null;
            state.logged_in = false;
        },
        update: (state, { payload }) => {
            state.username = payload.username;
            state.email = payload.email;
        }
    }
});

export const { update, login, logout } = userSlice.actions;

export const loginUser = data => dispatch => {
    const url = `${API_URL}/token-auth/`;
    return axios.post(url, data)
        .then(({ data }) => {
            dispatch(setLoginErrMsgs(null));
            dispatch(login(data));
        })
        .catch(err => {
            dispatch(setLoginErrMsgs(err.response.data));
        });
};

export const registerUser = data => dispatch => {
    const url = `${API_URL}/users/`;
    const config = {
        method: 'POST',
        url,
        data,
    };
    return axios(config).then(({ data }) => {
        dispatch(setRegisterErrMsgs(null));
        dispatch(login(data));
    }).catch(err => {
        dispatch(setRegisterErrMsgs(err.response.data));
    });
};

export const getUserDetails = () => dispatch => {
    const url = `${API_URL}/current_user/`;
    const config = {
        method: 'GET',
        url,
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`
        }
    };
    return axios(config).then(({ data }) => {
        dispatch(update(data));
    }).catch(err => {
        console.log(err);
    });
};

export const createPost = data => dispatch => {
    const url = `${API_URL}/posts/`;
    const config = {
        method: 'POST',
        url,
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
        data
    };
    return axios(config).then(({ data }) => {
        dispatch(setPostCreateErrorMessage(null));
        dispatch(setPostCreation());
    }).catch(err => {
        dispatch(setPostCreateErrorMessage(err.response.statusText));
    });
};

export default userSlice.reducer;
