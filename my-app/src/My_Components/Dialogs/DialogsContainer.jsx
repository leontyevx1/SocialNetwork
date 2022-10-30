import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;