const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Julia', surname: 'L'},
        {id: 2, name: 'Anna', surname: 'E'},
        {id: 3, name: 'Max', surname: 'S'},
        {id: 4, name: 'Anna', surname: 'K'},
        {id: 5, name: 'Emin', surname: 'M'},
        {id: 6, name: 'Dashi', surname: 'D'},
        {id: 7, name: 'Kirill', surname: 'T'},
        {id: 8, name: 'Dima', surname: 'Y'}
    ],
    messages: [
        {id: 1, message: 'Hello, my friend!'}]
};

const dialogsReducer = (state = initialState, action) => {
    //switch фильтрует по типу
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 9, message: body}]
            };
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE, newMessage
    }
}

export default dialogsReducer;