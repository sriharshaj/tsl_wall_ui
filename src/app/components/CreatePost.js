import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createPost } from '../slices/userSlice';
import { unSetPostCreation } from '../slices/flagSlice';

import { home_path } from '../routes';

import Error from './Error';

function handlePostSubmit(e, data, dispatch) {
    e.preventDefault();
    dispatch(createPost(data));
}

function renderErrorMessage(errorMessage) {
    if (errorMessage) {
        return (
            <Error message={errorMessage} />
        )
    }
}

export default function CreatePost(props) {
    const { history } = props;
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(state => state.user.logged_in);
    const isPostCreated = useSelector(state => state.flag.post_created);
    const postCreationErrMsg = useSelector(state => state.error.postCreationErrMsg);
    const [body, setBody] = useState('');

    // Redirect to home page if isUserLoggedIn is false or
    // isPostCreated flag is true
    if (!isUserLoggedIn || isPostCreated) {
        dispatch(unSetPostCreation());
        history.push(home_path);
    }

    // Post form
    return (
        <div className="container">
            {renderErrorMessage(postCreationErrMsg)}
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form onSubmit={(e) => handlePostSubmit(e, { body }, dispatch)}>
                        <div className="form-group">
                            <label htmlFor="postBody">Post your thoughts</label>
                            <textarea
                                required
                                className="form-control"
                                value={body}
                                onChange={e => setBody(e.target.value)}
                                id="postBody" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}
