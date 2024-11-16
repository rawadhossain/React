import React, { useState, useEffect } from 'react';

export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1',
        );
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, []); //rendered only once

    return post.title;
}
