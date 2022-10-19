import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/state";

const Dialogs = (props) => {
    //Создание массива элементов из messages для получение JSX элементов
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message}/>);
    //Создание массива элементов из dialogs для получение JSX элементов
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} surname={d.surname} id={d.id}/>);
    let newPostText = props.dialogsPage.newMessageText;

    let answerElement = React.createRef();

    let addAnswer = () => {
        props.dispatch(addMessageActionCreator());
    }

/*    let onMessageChange = () => {
        let text = answerElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }*/
    let onMessageChange = (e) => {
        let newTextMessage = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newTextMessage));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*Передаем элементы после мапинга*/}
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {/*Передаем элементы после мапинга*/}
                {messagesElements}
                <div>
                    <textarea name="" id="" cols="80" rows="5" ref={answerElement} value={newPostText} onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addAnswer}>Answer</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;