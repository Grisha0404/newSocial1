import {ActionType, PostType, ProfilePageType} from "../state/state";
import {v1} from "uuid";

export const profilePageReducer = (state: ProfilePageType, action: ProfilePageReducerType) => {
    switch (action.type) {
        case "Add-post":
            let newPost: PostType = {
                id: v1(),
                message: action.payload.newPostText,
                likesCounts: 0
            }
            return {...state, newPost}
        default:
            return state;
    }
};
export type ProfilePageReducerType = addPostACType

type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (title: string) => {
    return {
        type: "Add-post",
        payload: {
            newPostText: title
        }
    } as const
}