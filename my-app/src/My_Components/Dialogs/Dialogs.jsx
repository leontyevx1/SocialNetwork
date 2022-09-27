import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Julia' surname='Larina' id='1'/>
                <DialogItem name='Anna' surname='Ekimova' id='2'/>
                <DialogItem name='Max' surname='Solncev' id='3'/>
                <DialogItem name='Anna' surname='Kruzhalina' id='4'/>
                <DialogItem name='Emin' surname='Musaev'id='5'/>
                <DialogItem name='Dashi' surname='Dantsaranov'id='6'/>
                <DialogItem name='Kirill' surname='Tsypylov' id='7'/>
                <DialogItem name='Dima' surname='Yanios' id='8'/>
            </div>
            <div className={classes.messages}>
                <Messages content='Hello, my darling!'/>
                <Messages content='Hello Naruto'/>
                <Messages content='Yo Naruto'/>
                <Messages content='Yo'/>
                <Messages content='Yo Naruto'/>
                <Messages content='Yo'/>
                <Messages content='Yo Naruto'/>
                <Messages content='Yo'/>
            </div>
        </div>
    );
};

export default Dialogs;