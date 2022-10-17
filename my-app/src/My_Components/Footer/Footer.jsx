import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={classes.footerBar}><div className={classes.rights}>© 2020-2022 - Все материалы взяты в открытых источниках.</div></div>
        </div>
    );
};

export default Footer;