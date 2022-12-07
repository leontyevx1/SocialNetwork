import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, messagePost: 'Hi! How are you?', likesCount: 22},
        {id: 2, messagePost: 'It\'s my first post', likesCount: 2},
        {id: 3, messagePost: 'What are you doing now?', likesCount: 1},
        {id: 4, messagePost: 'WoooW', likesCount: 5},
        {id: 5, messagePost: 'Hi!My friend!', likesCount: 3}],
    profile: null,
    status: ""
};


//ОБРАБОТЧИКИ ACTION
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, messagePost: action.newPostBody, likesCount: 0}],
            }


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
}


//ACTION CREATORS
export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST, newPostBody
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}


/// THUNK`S
export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            });
    }
}


export default profileReducer;