import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeStatusProfileAC, changeStatusProfileTC} from "../../../Reducer/profilePageReducer";
import {AppRootStateType} from "../../../Redux/redux-store";
import {ChangedStatus} from "./ChangedStatus";

type StatusProfileType = {}

export const StatusProfile: React.FC<StatusProfileType> = (props) => {
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const dispatch = useDispatch()

    const changeHandler = (title:string) =>{
        dispatch(changeStatusProfileAC(title))
    }
    const activeBlur = () =>{
        debugger
        dispatch(changeStatusProfileTC(status))
    }

    return (
        <div>
            <ChangedStatus changeHandler={changeHandler} activeBlur={activeBlur} status={status}/>
        </div>
    );
};
