import classes from "./Messages.module.css";
import React from "react";

const Messages = (props) => {
    return <div className={classes.itemMessage}>{props.content}</div>
}

export default Messages;