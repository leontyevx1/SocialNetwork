import React from 'react';
import Friends from "./Friends/Friends";
import classes from './SideBar.module.css'


const SideBar = (props) => {
    let friendsName = props.bestFriends.map(f => <Friends name={f.name} key={f.id} id={f.id}/>);
    return (
        <div className={classes.headSide}>
            <span className={classes.alert}>3</span>
            Best Friends
        <div>
            {friendsName}
        </div>
        </div>
    );
};

export default SideBar;