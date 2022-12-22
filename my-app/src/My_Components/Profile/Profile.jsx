import React from 'react';
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
//Мапим posts
