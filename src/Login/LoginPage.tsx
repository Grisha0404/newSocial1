import React from 'react';
import style from './LoginUser/login.module.css'
import {UniversalButton} from "../Common/UniversalButton";

export const LoginPage = () => {
    return (
        <div className={style.loginPage}>
            <div className={style.loginContainer}>
                <h2>Join NewSocial to hear the latest from people you follow</h2>
                <UniversalButton callback={() => {
                }} name={'Continue with FaceBook'}/>
                <UniversalButton callback={() => {
                }} name={'Continue with Google'}/>
                <UniversalButton callback={() => {
                }} name={'Continue with VK'}/>
                <h4>-------- or --------</h4>
                <input placeholder={'Your email address or profile URL'}/>
                <input placeholder={'Your password'}/>
                <UniversalButton callback={() => {
                }} name={'Sign IN'}/>
            </div>
        </div>
    );
};