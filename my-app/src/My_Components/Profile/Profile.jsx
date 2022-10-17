import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import MyPage from "./MyPage/MyPage";
import classes from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={classes.profileDirectory}>
            <MyPage/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;
//Мапим posts
