const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    //switch фильтрует по типу
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                //создание копии стейта с помощью spread-оператора
                ...state,
                newMessageText: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                //копирование state.messages и добавление элемента в массив
                messages: [...state.messages, {id: 9, message: body}]
            };

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        body: body
    }
}


export default dialogsReducer;