import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChangeOption: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
        addAnswerOption: () => {dispatch(addMessageActionCreator())}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);