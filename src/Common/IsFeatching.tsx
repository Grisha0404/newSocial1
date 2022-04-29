import React from 'react';
import loadingImg from "./image/Curve-Loading.gif";
import style from './fetch.module.css'

export const IsFetching = () => {
    return (
            <div className={style.Fetch}>
                <img src={loadingImg} />
            </div>
    );
};

