import React from 'react';
import loadingImg from "./image/Curve-Loading.gif";

type IsFetchingType = {
    width: string
    height: string
}


export const IsFetching:React.FC<IsFetchingType> = ({width,height}) => {
    return (
            <div style={{width:width, height: height}}>
                <img src={loadingImg} />
            </div>
    );
};

