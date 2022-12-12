import {getAuth} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());
        //несколько промисов: Promise.all([promise1,promise2]).then(() => {.....}
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    };
}


export default appReducer;