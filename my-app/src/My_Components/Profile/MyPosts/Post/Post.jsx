import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.newPost}>
                New Post
                <div>
                    <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt=""/>
                    <div className={classes.message}>
                        {props.message}
                    </div>
                    <div className={classes.like}>
                        <span>Like</span>
                    </div>
                </div>
            </div>
        </div>
            )
            };

            export default Post;