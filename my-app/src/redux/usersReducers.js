const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [] };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state,
                users: [...state.users, ...action.users ]}
        }

        default:
            return state;
    }
}

export const followedAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unFollowedAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;