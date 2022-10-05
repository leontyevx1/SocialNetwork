import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {

    return (
        <div className={classes.bestFriends}>
            <span className={classes.name}>{props.name}</span>
        </div>
    );
};

export default Friends;