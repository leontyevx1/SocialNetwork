import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPostForm from "./Post/AddPostForm";

const MyPosts = ({posts, addPostOption}) => {
    let postsElements = posts.map(p => <Post message={p.messagePost} likesCount={p.likesCount} key={p.id} id={p.id}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm sendPostMessage={addPostOption}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
