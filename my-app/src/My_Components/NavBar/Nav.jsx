import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import SideBarContainer from "./SideBar/SideBarContainer";

const Nav = ({state}) => {
    const classToggle = navData => navData.isActive ? classes.activeLink : classes.item;

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classToggle} to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div>
                <SideBarContainer state={state}/>
            </div>
        </nav>
    );
};

export default Nav;