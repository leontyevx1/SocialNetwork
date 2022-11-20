import React from 'react';
import logo from '../logo/logo2.png'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <a href='http://localhost:3000/'><img src={logo}/></a>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;