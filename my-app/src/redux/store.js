/*
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    /!*_state: {
        profilePage: {
            posts: [
                {id: 1, messagePost: 'Hi! How are you?', likesCount: 22},
                {id: 2, messagePost: 'It\'s my first post', likesCount: 2},
                {id: 3, messagePost: 'What are you doing now?', likesCount: 1},
                {id: 4, messagePost: 'WoooW', likesCount: 5},
                {id: 5, messagePost: 'Hi!My friend!', likesCount: 3}],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Julia', surname: 'Larina'},
                {id: 2, name: 'Anna', surname: 'Ekimova'},
                {id: 3, name: 'Max', surname: 'Solncev'},
                {id: 4, name: 'Anna', surname: 'Kruzhalina'},
                {id: 5, name: 'Emin', surname: 'Musaev'},
                {id: 6, name: 'Dashi', surname: 'Dantsaranov'},
                {id: 7, name: 'Kirill', surname: 'Tsypylov'},
                {id: 8, name: 'Dima', surname: 'Yanios'}
            ],
            messages: [
                {id: 1, message: 'Hello, my darling!'},
                {id: 2, message: 'Hello Naruto'},
                {id: 3, message: 'Yo Naruto'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo Naruto'},
                {id: 6, message: 'Yo'},
                {id: 7, message: 'Yo Naruto'},
                {id: 8, message: 'Yo'}],
            newMessageText: ''
        },
        sideBar: {
            bestFriends: [
                {id: 1, name: 'Max', lastname: 'Solncev'},
                {id: 2, name: 'Julia', lastname: 'Larina'},
                {id: 3, name: 'Anna', lastname: 'Ekiman'}
            ]
        }
    },*!/
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    subscribes(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;*/
