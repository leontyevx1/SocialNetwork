import React from 'react';
import classes from './Users.module.css'
import axios from "axios";
import userImages from '../../assets/images/phProfDefault.png'

class Users extends React.Component {

    constructor(props) {
        super(props);

        //Запрос на сервак
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userImages}
                                 className={classes.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={classes.buttonUnfollow} onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button className={classes.buttonFollow} onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;