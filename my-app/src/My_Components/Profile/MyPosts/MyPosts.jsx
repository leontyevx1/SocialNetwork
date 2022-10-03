import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.messagePost} likesCount={p.likesCount}/>);

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
                {/*Вставляем результат мапинга*/}
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;