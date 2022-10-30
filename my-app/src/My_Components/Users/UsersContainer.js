import React from 'react';
import Users from "./Users";
import {followedAC, unFollowedAC} from "../../redux/usersReducers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followedAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowedAC(userId))
        },
        setUsers: (users) => {
            dispatch(followedAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);