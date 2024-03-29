import {useForm} from "react-hook-form";
import React from "react";

const AddMessageForm = ({sendMessage}) => {

    const {register, handleSubmit, reset} = useForm()
    const onSubmit = data => {
        onSendMessageClick(data);
        reset()
    }

    const onSendMessageClick = (data) => {
        sendMessage(data.newMessage);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <textarea {...register("newMessage", {required: true})} placeholder="Enter your message" cols="80"
                              rows="5"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    );
};

export default AddMessageForm;