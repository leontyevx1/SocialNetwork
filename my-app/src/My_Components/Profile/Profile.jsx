import React from 'react';
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
//Мапим posts
