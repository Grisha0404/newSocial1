import React, {memo} from 'react';

export type MessagesType = {
    id: string
    message: string
}

export const Message = memo((props: MessagesType) => {
    return (
        <div>
            {props.message}
        </div>

    );
});
