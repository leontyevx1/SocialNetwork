const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://www.kinogallery.com/img/wallpaper/kinogallery-wallpaper-800x600-14065.jpg',
            fullName: 'Aleksey', followed: true, status: 'Hello I\'m a boss!', location: {country: 'Russia', city: 'St.Petersburg' } },
        {id: 2, photoUrl: 'https://icywheels.com/public/user/33/1d/a3ef4134084467448edcdfee3cf7c875.jpg',
            fullName: 'Sofia' , followed: false, status: 'Hi! Let\'s do it!', location: {country: 'Russia', city: 'Chita' } },
        {id: 3, photoUrl: 'https://cdn.pesonapengantin.my/2017/07/Untitled-design-12.jpg',
            fullName: 'Kirill' , followed: false, status: 'Stay fresh!', location: {country: 'Belarus', city: 'Minsk' } }
    ]
};

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