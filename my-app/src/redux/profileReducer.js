import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, messagePost: 'Hi! How are you?', likesCount: 22},
        {id: 2, messagePost: 'It\'s my first post', likesCount: 2},
        {id: 3, messagePost: 'What are you doing now?', likesCount: 1},
        {id: 4, messagePost: 'WoooW', likesCount: 5},
        {id: 5, messagePost: 'Hi!My friend!', likesCount: 3}],
    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, messagePost: state.newPostText, likesCount: 0}],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => {
                    dispatch(setUserProfile(data))
            });
    }
}

export default profileReducer;