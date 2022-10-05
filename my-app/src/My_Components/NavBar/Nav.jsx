import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div>
                <SideBar state={props.state.bestFriends}/>
            </div>
        </nav>
    );
};

export default Nav;