import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { retrivePosts } from '../slices/wallSlice'
import Post from './Post';

export default function Wall() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrivePosts());
    }, [dispatch])
    const posts = useSelector(state => state.wall.posts);
    return (
        <div className="container">
            {posts.map(post => <Post body={post.body} key={post.pk} author={post.author} />)}
        </div>
    )
}
