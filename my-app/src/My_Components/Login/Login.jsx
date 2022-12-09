import React from 'react';
import Form from "./Form/Form";
import {Navigate} from "react-router-dom"
import {connect} from "react-redux";


const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <Form/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, null)(Login);