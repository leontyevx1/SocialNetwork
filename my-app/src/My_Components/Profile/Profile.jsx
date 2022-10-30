import React from 'react';
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;
//Мапим posts
