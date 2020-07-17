import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
    const user = useSelector(state => state.user);
    return (
        <div>
            <div>Username: {user.username}</div><br />
            <div>Email: {user.email}</div>
        </div>
    );
}
