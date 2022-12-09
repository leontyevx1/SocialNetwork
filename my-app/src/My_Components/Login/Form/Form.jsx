import React from 'react';
import {useForm} from "react-hook-form";
import classes from "./Form.module.css"
import {login} from "../../../redux/authReducer";
import {connect} from "react-redux";

const Form = (props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'all',
        defaultValues: {
            checkbox: false
        }
    })

    //принимает в себя data, те поля, которые мы получим
    const onSubmit = (data) => {
        props.login(data.email, data.password, data.checkbox)
        reset()
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={errors?.email ? classes.formError : ""} {...register('email',
                        {
                            required: 'Form is require field!',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please, enter valid email!'
                            }
                        })}
                           placeholder='Email'
                    />
                    {errors?.email && (<div style={{color: '#dc0000'}}>{errors.email.message}</div>)}
                </div>
                <div>
                    <input className={errors?.password ? classes.formError : ""} type='password' {...register('password',
                        {
                            required: 'Password is require field!',
                        })}
                           placeholder='Password'
                    />
                    {errors?.password && (<div style={{color: '#dc0000'}}>{errors.password.message}</div>)}

                </div>
                <div>
                    <input {...register("checkbox")} type="checkbox"/> Remember me
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
    );
};

export default connect(null, {login}) (Form);