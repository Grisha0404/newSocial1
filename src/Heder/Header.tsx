import React from 'react';
import {LoginContainer} from "./LoginUser/LoginContainer";

export const Header = () => {
    return (
        <div className={'Header'}>
            <div>
                <img src={'https://static.rfstat.com/renderforest/images/v2/logo-homepage/line_style_1.png'}/>
                <LoginContainer/>
            </div>
        </div>
    );
};
