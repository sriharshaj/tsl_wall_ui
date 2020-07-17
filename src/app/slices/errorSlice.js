import { createSlice } from '@reduxjs/toolkit';

function handleAuthenticationError(errorData) {
    let errors = [];
    errorData = errorData || {};
    const { username, email, passoword, non_field_errors } = errorData;
    debugger;
    [username, email, passoword, non_field_errors].forEach((errs) => {
        if (errs) {
            errors = errors.concat(errs);
        }
    });
    return errors;
}

export const errorSlice = createSlice({
    name: 'errors',
    initialState: {
        errMsg: null,
        registerErrMsgs: null,
        loginErrMsgs: null,
        postCreationErrMsg: null
    },
    reducers: {
        setErrorMessage: (state, { payload }) => {
            state.errorMsg = payload;
        },
        setPostCreateErrorMessage: (state, { payload }) => {
            state.postCreationErrMsg = payload;
        },
        setRegisterErrMsgs: (state, { payload }) => {
            const errMsgs = handleAuthenticationError(payload);
            state.registerErrMsgs = errMsgs.join(',');
        },
        setLoginErrMsgs: (state, { payload }) => {
            const errMsgs = handleAuthenticationError(payload);
            state.loginErrMsgs = errMsgs.join(',');
        }
    }
});

export const {
    setErrorMessage,
    setPostCreateErrorMessage,
    setRegisterErrMsgs,
    setLoginErrMsgs
} = errorSlice.actions;

export default errorSlice.reducer;
