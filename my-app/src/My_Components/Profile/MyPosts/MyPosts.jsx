import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button className={classes.buttonAdd}>Add post</button>
                </div>
            </div>
            <div>
                <Post message='Hi! How are you?'/>
                <Post message="It's my first post"/>
            </div>
        </div>
    );
};

export default Posts;