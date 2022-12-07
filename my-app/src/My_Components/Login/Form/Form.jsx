import React from 'react';
import {useForm} from "react-hook-form";

const Form = (props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'all',
        defaultValues: {
            checkbox: false
        }
    })

    //принимает в себя data, те поля, которые мы получим
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('email',
                        {
                            required: 'Form is require field!',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please, enter valid email!'
                            }
                        })}
                           placeholder='Email'
                    />
                    {errors?.email && (<div style={{color: '#f3e102'}}>{errors.email.message}</div>)}
                </div>
                <div>
                    <input type='password' {...register('password',
                        {
                            required: 'Password is require field!',
                        })}
                           placeholder='Password'
                    />
                    {errors?.password && (<div style={{color: '#f3e102'}}>{errors.password.message}</div>)}

                </div>
                <div>
                    <input {...register("checkbox")} type="checkbox"/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

export default Form;