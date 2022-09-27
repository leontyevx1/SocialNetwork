import React from 'react';
import classes from './MyPage.module.css'

const MyPage = () => {
    return (
            <div className={classes.content}>
                <img
                    src="https://play-lh.googleusercontent.com/RDWayfeyL46yaQGIYiwc-B2p9VB9da8Nf6tqhrkgrAghULaeZaw9LT5vVyuEjZJcPS8"
                    alt="Photo profile"/>
                <div>
                    <h1>Naruto Uzumaki</h1>
                    <div className={classes.infoAboutMe}>
                        <h3>About Me: SALAM ALEKUM!</h3>
                    </div>
                </div>
            </div>
    );
};

export default MyPage;