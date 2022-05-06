import React, { memo} from 'react';


type NewPostType = {
    callback: () => void,
    name: string
}

export const UniversalButton = memo((props: NewPostType) => {

    const addNewPosts = () => {
        alert(props.name)
    }

    return (
        <div>
            <div>
                <button onClick={addNewPosts}>{props.name}</button>
            </div>
        </div>
    );
});
