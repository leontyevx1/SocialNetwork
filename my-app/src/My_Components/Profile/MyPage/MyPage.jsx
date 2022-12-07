import React from 'react';
import classes from './MyPage.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import Status from "../../ProfileStatus/Status";

const MyPage = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    if (!props.profile.data.photos.large) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <img src={props.profile.data.photos.large} alt="Photo profile"/>
            <Status status={props.status} updateStatus={props.updateStatus}/>
            <div className={classes.infoAboutMe}>
                <h1>{props.profile.fullName}</h1>
                <h3>About Me: {props.profile.aboutMe}</h3>
            </div>
        </div>
    );
};

export default MyPage;

