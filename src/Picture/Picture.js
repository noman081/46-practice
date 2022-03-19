import React, { useEffect, useState } from 'react';
import './Picture.css';
const Picture = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <div>
            <h2>Welcome to my post.</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

function Post(props) {
    const { title, body } = props.post;
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    )
}

export default Picture;