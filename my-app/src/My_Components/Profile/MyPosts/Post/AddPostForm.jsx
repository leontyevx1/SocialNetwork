import {useForm} from "react-hook-form";
import classes from "../MyPosts.module.css";
import React from "react";

const AddPostForm = (props) => {

    const {register, handleSubmit, watch, reset} = useForm()
    const onSubmit = data => {
        console.log(data.newPostBody)
        onSendMessageClick(data);
        reset()
    }

    const onSendMessageClick = (data) => {
        props.sendPostMessage(data.newPostBody);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea {...register("newPostBody", {})} placeholder="Enter" cols="30" rows="5" />
                </div>
                <div>
                    <button className={classes.buttonAdd}>Add post</button>
                </div>
        </form>
    );
};

export default AddPostForm;