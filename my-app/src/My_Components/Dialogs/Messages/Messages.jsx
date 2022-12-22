import classes from "./Messages.module.css";
import React from "react";

const Messages = ({message}) => {
    return (
        <div className={classes.itemMessage}>
            {message}
        </div>)
}

export default Messages;