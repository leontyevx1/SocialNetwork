import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    //Создание массива элементов из messages для получение JSX элементов
    let messagesElements = dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} id={m.id}/>);
    //Создание массива элементов из dialogs для получение JSX элементов
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} surname={d.surname} id={d.id} key={d.id}/>);
    let newMessageText = props.dialogsPage.newMessageText;

    let answerElement = React.createRef();

    let addAnswer = () => {
        props.addAnswerOption();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChangeOption(text);
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
                        <textarea name="" id="" cols="80" rows="5" ref={answerElement} placeholder='Enter your message'
                                  onChange={onMessageChange} value={newMessageText}/>
                </div>
                <div>
                    <button onClick={addAnswer}>Answer</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;