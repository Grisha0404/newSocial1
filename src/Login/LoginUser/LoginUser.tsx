import React from 'react';
import style from "./login.module.css";
import ava from "../../Common/image/ava.jpeg";
import {DataInitialType} from "../../Reducer/authUsersReducer";
import {NavLink} from "react-router-dom";


export const LoginUser: React.FC<DataInitialType> = ({id, login, email, isAuth}) => {

    return (
        isAuth ?
            <div className={style.loginUser}>
                <NavLink to={'/profile/' + id}>
                    <img src={ava} alt={'Photo'}/>
                </NavLink>
                <div className={style.loginInfo}>
                    <div>{login}</div>
                    <div className={style.block}>{email}</div>
                </div>
            </div>
            : <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
    );
};
