import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import { loginUser } from '../slices/userSlice';
import { home_path } from '../routes';

import Error from './Error';

function handleLoginSubmit(e, data, dispatch, login) {
    e.preventDefault();
    dispatch(login(data));
}

function renderErrorMessage(message) {
    if (message) {
        return (
            <Error message={message} />
        )
    }
}

export default function Login() {
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.user.logged_in);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginErrMsg = useSelector(state => state.error.loginErrMsgs);
    if (userLoggedIn) {
        return (<Redirect to={home_path} />);
    }
    return (
        <div className="container">
            {renderErrorMessage(loginErrMsg)}
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form onSubmit={(e) => handleLoginSubmit(e, { username, password }, dispatch, loginUser)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}
