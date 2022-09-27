import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage/>
            <MyPosts/>
        </div>
    );
};

export default Profile;