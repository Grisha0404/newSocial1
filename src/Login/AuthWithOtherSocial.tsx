import React from 'react';
import {UniversalButton} from "../Common/UniversalButton";

export const AuthWithOtherSocial = () => {
    return (
        <div>
            <UniversalButton callback={() => {
            }} name={'Continue with FaceBook'}/>
            <UniversalButton callback={() => {
            }} name={'Continue with Google'}/>
            <UniversalButton callback={() => {
            }} name={'Continue with VK'}/>
        </div>
    );
};
