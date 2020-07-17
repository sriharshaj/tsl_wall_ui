import React from 'react';

export default function error({ message }) {
    return (
        <div class="alert alert-danger" role="alert">
            {message}
        </div>
    );
}
