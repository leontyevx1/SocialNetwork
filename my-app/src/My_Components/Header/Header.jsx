import React from 'react';
import logo from '../logo/logo2.png'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {

    return (
        <header className={classes.header}>
            <a href='http://localhost:3000/'><img src={logo}/></a>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;