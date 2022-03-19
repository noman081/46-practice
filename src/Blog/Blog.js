import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h1>Heading: {props.title}</h1>
            <p>Author: {props.author}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam atque aspernatur maxime itaque quisquam nostrum facere, magni eos consectetur! Ullam temporibus soluta magnam in deleniti eum laudantium repudiandae debitis?</p>
        </div>
    );
};

export default Blog;