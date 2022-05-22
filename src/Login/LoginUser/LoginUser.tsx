import React from 'react';
import style from "./login.module.css";
import ava from "../../Common/image/ava.jpeg";
import {logOut} from "../../Reducer/authUsersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {MeType} from "../../Redux/API";

type LoginUserType = {
    authMe: MeType
    isAuth: boolean,
}

export const LoginUser = (props: LoginUserType) => {
    const dispatch = useDispatch()
    const outChangeHandler = () => {
        dispatch(logOut())
    }

    return (
        props.isAuth ?
            <div className={style.loginUser}>
                <NavLink to={'/profile/' + props.authMe.id}>
                    <img src={ava} alt={'Photo'}/>
                </NavLink>
                <div className={style.loginInfo}>
                    <div>{props.authMe.login}</div>
                    <div className={style.block}>{props.authMe.email}</div>
                </div>
                <button onClick={outChangeHandler}>LogOut</button>
            </div>
            : <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
    );
};
