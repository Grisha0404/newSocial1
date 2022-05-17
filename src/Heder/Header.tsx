import React from 'react';
import {LoginContainer} from "../Login/LoginUser/LoginContainer";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";

export const Header = () => {
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    return (
        <div className={'Header'}>
            {status === 'loading' && <LinearProgress/>}
            <div>
                <img src={'https://static.rfstat.com/renderforest/images/v2/logo-homepage/line_style_1.png'}/>
                <LoginContainer/>
            </div>

        </div>
    );
};
