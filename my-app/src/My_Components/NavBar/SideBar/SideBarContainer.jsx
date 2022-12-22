import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        bestFriends: state.sideBar.bestFriends
    }
}

const SideBarContainer = connect(mapStateToProps, null)(SideBar);

export default SideBarContainer;