import React from 'react';
import {InfoUser} from "../InfoUser";

export const InfoProfile = () => {
    return (
        <div>
            <img
                src={'https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg'}/>
            <InfoUser/>
            <div style={{textAlign: 'left', padding: '20px'}}>
                My Posts
            </div>
        </div>
    );
};
