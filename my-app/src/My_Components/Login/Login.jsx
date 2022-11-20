import React from 'react';
import classes from './Login.module.css'

const Login = (props) => {
    return (
        <div className={classes.mainContainer}>
            <div>Access is closed!</div>
            <div>Please, go to the authorization site and<a className={classes.click} href="https://social-network.samuraijs.com"> LOG IN </a>in to your profile!
            </div>
        </div>
    );
};

export default Login;