import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { home_path, login_path, register_path, profile_path, create_post_path } from '../routes';

import { logout } from '../slices/userSlice';

function LoggedIn() {
    const dispatch = useDispatch();
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={create_post_path} className="nav-link">Create Post</Link>
            </li>
            <li className="nav-item">
                <Link to={profile_path} className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
                <Link to={home_path} className="nav-link" onClick={() => dispatch(logout())}>Logout</Link>
            </li>
        </ul>
    );
}

function LoggedOut() {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={login_path} className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to={register_path} className="nav-link">Register</Link>
            </li>
        </ul>
    );
}
export default function NavBar() {
    const isLoggedIn = useSelector(state => state.user.logged_in);
    const navActions = isLoggedIn ? LoggedIn() : LoggedOut();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-2">
            <Link to={home_path} className="navbar-brand">The Wall</Link>
            <ul className="navbar-nav mr-auto">
            </ul>
            {navActions}
        </nav >
    );
}
