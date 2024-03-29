import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import AddMessageForm from "./Form/AddMessageForm";

const Dialogs = ({dialogsPage, addAnswerOption}) => {

    //Создание массива элементов из messages для получение JSX элементов
    let messagesElements = dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} id={m.id}/>);
    //Создание массива элементов из dialogs для получение JSX элементов
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} surname={d.surname} id={d.id} key={d.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageForm sendMessage={addAnswerOption}/>
            </div>
        </div>
    );
};

export default Dialogs;