import React from 'react';
import {Post} from "./Post/Post";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {ProfilePageType} from "../../Reducer/profilePageReducer";

export const PostsContainer = () => {
    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)

    return (
        <div>
            {profilePage.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                               likesCounts={el.likesCounts}/>)}
        </div>
    );
};