import React from 'react';
import style from "./login.module.css";
import ava from "../../Common/image/ava.jpeg";
import {DataInitialType} from "../../Reducer/authUsersReducer";


export const LoginUser: React.FC<DataInitialType> = ({login, email}) => {
    return (
        <div className={style.loginUser}>
            <img src={ava} alt={'Photo'}/>
            <div className={style.loginInfo}>
                <div>{login}</div>
                <div>{email}</div>
            </div>
        </div>
    );
};
