import React from 'react';
import style from './LoginUser/login.module.css'

export const LoginPage = () => {
    return (
        <div className={style.loginPage}>
            Join NewSocial to hear the latest from people you follow
            <button>Continue with FaceBook</button>
            <button>Continue with Google</button>
            <button>Continue with VK</button>
            <div>or</div>
            <input/>
            <button>Continue</button>
        </div>
    );
};