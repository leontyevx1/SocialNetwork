import React from 'react';
import classes from "./Users.module.css";
import userImages from "../../assets/images/phProfDefault.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (<div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userImages}
                                 className={classes.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button className={classes.buttonUnfollow}
                                          disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)
                                }}>
                                    Unfollow</button>
                                : <button className={classes.buttonFollow}
                                          disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>
                                    Follow</button>}
                        </div>
                    </span>
        <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
        <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
    </div>)
};


export default User;