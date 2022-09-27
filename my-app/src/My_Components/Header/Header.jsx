import React from 'react';
import logo from '../logo/logo2.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <a href='http://localhost:3000/'><img src={logo}/></a>
        </header>
    );
};

export default Header;