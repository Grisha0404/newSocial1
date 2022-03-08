import React from 'react';
import d from './dialog.module.css'

export const NewMessage = () => {
    return (
        <div className={d.inp}>
            <input/>
            <button>Send</button>
        </div>
    );
};
