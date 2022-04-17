import React from 'react';
import {NewMessage} from "./NewMessage";

export type MessagesType = {
    id: string
    message: string
}

export const Message = (props: MessagesType) => {
    return (
        <div>
            {props.message}
        </div>

    );
};
