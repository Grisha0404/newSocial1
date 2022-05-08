import React from 'react';
import style from './LoginUser/login.module.css';
import {AuthWithOtherSocial} from "./AuthWithOtherSocial";
import Login from "./LoginForm";


export const LoginPage = () => {
    // const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
    //
    // const onSubmit = (formData: FormDataType) => {
    //     console.log(formData)
    // }
    return (
        <div className={style.loginPage}>
            <div className={style.loginContainer}>
                <h2>Join NewSocial to hear the latest from people you follow</h2>
                <AuthWithOtherSocial/>
                <h4>-------- or --------</h4>
                <div className={style.login}>
                    <Login/>
                </div>
            </div>
        </div>
    );
};