import React from 'react';
import classes from './Users.module.css'

const Users = (props) => {

    /*if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.kinogallery.com/img/wallpaper/kinogallery-wallpaper-800x600-14065.jpg',
                    fullName: 'Aleksey',
                    followed: true,
                    status: 'Hello I\'m a boss!',
                    location: {country: 'Russia', city: 'St.Petersburg'}
                },
                {
                    id: 2,
                    photoUrl: 'https://icywheels.com/public/user/33/1d/a3ef4134084467448edcdfee3cf7c875.jpg',
                    fullName: 'Sofia',
                    followed: false,
                    status: 'Hi! Let\'s do it!',
                    location: {country: 'Russia', city: 'Chita'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.pesonapengantin.my/2017/07/Untitled-design-12.jpg',
                    fullName: 'Kirill',
                    followed: false,
                    status: 'Stay fresh!',
                    location: {country: 'Belarus', city: 'Minsk'}
                }
            ]
        )
    }*/

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={classes.buttonUnfollow} onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button className={classes.buttonFollow} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;