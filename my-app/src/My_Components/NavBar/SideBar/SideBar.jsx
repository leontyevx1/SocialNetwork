import React from 'react';
import Friends from "./Friends/Friends";
import classes from './SideBar.module.css'


const SideBar = (props) => {
    let friendsName = props.state.map(f => <Friends name={f.name}/>);
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