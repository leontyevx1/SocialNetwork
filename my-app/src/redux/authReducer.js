import {authApi} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
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

export const getAuth = () => async (dispatch) => {
    const response = await authApi.getAuth();
    if (response.resultCode === 0) {
        const {id, login, email} = response.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, setError) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuth())
    } else {
        setError('server', {
            message: response.messages
        })
    }
}
export const logout = () => async (dispatch) => {
    const response = await authApi.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;