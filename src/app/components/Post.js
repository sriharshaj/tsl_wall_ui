import React from 'react';

export default function Post({ body, author }) {
    return (
        <div className="card mb-2 text-left" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: "#3b5998" }}>{author.username} says:</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}
