import React, {memo, useState} from 'react';
import d from '../../dialog.module.css'
import {MessageContainer} from "../../MessageContainer/MessageContainer";

export type DialogsType = {
    id: string
    name: string
    ava: string
}

export const Dialog = memo((props: DialogsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div className={d.message}>
            <span style={{border: 'none', backgroundColor: 'white'}} onClick={() => setCollapsed(!collapsed)}><img
                src={props.ava}/> {props.name}</span>
            {collapsed &&
                <MessageContainer/>
            }
        </div>
    );
});