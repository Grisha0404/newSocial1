import React from 'react';
import {NewMessage} from "./NewMessage";

type DialogType = {
    id: string
    message: string
}

export const Dialog = (props: DialogType) => {
    return (
        <div>
            {props.message}

        </div>

    );
};
