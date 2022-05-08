import React from 'react';
import {UniversalButton} from "../Common/UniversalButton";

export const LoginForm = () => {
    return (
        <form>
            <input placeholder={'Your email address'}/>
            <input placeholder={'Your password'}/>
            <div>
                <input type={'checkbox'}/>remember me
            </div>
            <UniversalButton callback={() => {
            }} name={'Sign IN'}/>
        </form>
    );
};
