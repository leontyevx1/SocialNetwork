import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.messagePost} likesCount={p.likesCount} key={p.id} id={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPostOption();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChangeOption(text);
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
                    <button onClick={addPost} className={classes.buttonAdd}>Add post</button>
                </div>
            </div>
            <div>
                {/*Вставляем результат мапинга*/}
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;