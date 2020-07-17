import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import { registerUser } from '../slices/userSlice';
import { home_path } from '../routes';

import Error from './Error';

function handleLoginSubmit(e, data, dispatch) {
    e.preventDefault();
    dispatch(registerUser(data));
}

function renderErrorMessage(message) {
    if (message) {
        return (
            <Error message={message} />
        )
    }
}

export default function Register() {
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.user.logged_in);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const registerErrMsg = useSelector(state => state.error.registerErrMsgs);
    if (userLoggedIn) {
        return (<Redirect to={home_path} />);
    }
    return (
        <div className="container">
            {renderErrorMessage(registerErrMsg)}
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form onSubmit={(e) => handleLoginSubmit(e, { username, email, password }, dispatch)}>
                        <div className="form-group">
                            <label htmlFor="registerUsername">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                id="registerUsername" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerEmail">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="registerEmail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerPassword">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="registerPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}
