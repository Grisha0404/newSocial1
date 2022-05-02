import React, {useEffect} from 'react';
import API from "../../Redux/API";
import {NavLink} from "react-router-dom";
import style from './login.module.css'
import {useDispatch} from "react-redux";
import {setLoginUsersAC} from "../../Reducer/authUsersReducer";

export const LoginContainer = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        const login = async () =>{
           try{
               const {data} = await API.authUser()
               debugger
               dispatch(setLoginUsersAC(data.data))
           } catch (error){

               console.log('err')
           }
        }
        login()
    },[dispatch])

    return (
        <div className={style.loginLink}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
};