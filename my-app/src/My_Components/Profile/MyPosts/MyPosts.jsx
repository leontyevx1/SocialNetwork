import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.messagePost} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPoster = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="5" ref={newPostElement} onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPoster} className={classes.buttonAdd}>Add post</button>
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