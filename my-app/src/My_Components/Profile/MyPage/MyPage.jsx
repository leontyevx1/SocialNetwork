import React from 'react';
import classes from './MyPage.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import StatusWithHook from "../../ProfileStatus/StatusWithHook";

const MyPage = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            {(profile.data.photos.large)
                ? <img src={profile.data.photos.large} alt="Photo profile"/>
                : <Preloader/>}
            <StatusWithHook status={status} updateStatus={updateStatus}/>
            <div className={classes.infoAboutMe}>
                <h1>{profile.fullName}</h1>
                <h3>About Me: {profile.aboutMe}</h3>
            </div>
        </div>
    );
};

export default MyPage;

