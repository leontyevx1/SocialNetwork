import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={classes.itemChat}>
            <NavLink className={classes.chat} to={"/dialogs/" + props.id}>{`${props.name} ${props.surname}`}</NavLink>
        </div>
    );
};

export default DialogItem;