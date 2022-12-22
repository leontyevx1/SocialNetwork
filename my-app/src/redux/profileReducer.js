import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, messagePost: 'Hi! How are you?', likesCount: 22},
        {id: 2, messagePost: 'It\'s my first post', likesCount: 2},
        {id: 3, messagePost: 'What are you doing now?', likesCount: 1},
        {id: 4, messagePost: 'WoooW', likesCount: 5},
        {id: 5, messagePost: 'Hi!My friend!', likesCount: 3}],
    profile: null
};


//ОБРАБОТЧИКИ ACTION
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, messagePost: action.newPostBody, likesCount: 0}],
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
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

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST, postId
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
export const getProfile = (userId) => async (dispatch) => {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;