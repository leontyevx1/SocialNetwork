import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        bestFriends: state.sideBar.bestFriends
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;