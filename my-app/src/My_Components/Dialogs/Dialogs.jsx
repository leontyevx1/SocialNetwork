import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    //Создание массива элементов из messages для получение JSX элементов
    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>);
    //Создание массива элементов из dialogs для получение JSX элементов
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} surname={d.surname} id={d.id}/>);

    let answerElement = React.createRef();

    let answer = () => {
        let text = answerElement.current.value;
        alert(text);
        answerElement.current.value = '';
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
                    <textarea name="" id="" cols="80" rows="5" ref={answerElement}></textarea>
                </div>
                <div>
                    <button onClick={answer}>Answer</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;