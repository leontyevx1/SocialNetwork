import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    "id": null,
    "login": null,
    "email": null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA, data: {id, login, email, isAuth}
    }
}

export const getAuth = () => {
    return (dispatch) => {
        authApi.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuth())
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}



export default authReducer;