const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
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
    },
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                messagePost: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newTextMessage;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 9,
                message: this._state.dialogsPage.newMessageText,
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (newTextMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newTextMessage: newTextMessage
    }
}


export default store;
window.store = store;