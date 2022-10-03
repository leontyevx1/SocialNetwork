import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

export default Profile;
//Мапим posts
