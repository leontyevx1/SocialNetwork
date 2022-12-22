import React from 'react';
import classes from "./Users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return (
        <div className={classes.userPage}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    props.users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                               follow={props.follow} unfollow={props.unfollow} key={u.id}/>)
                }
            </div>
        </div>
    );
};

export default Users;