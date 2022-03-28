import {ActionType, DialogsType, MessagesPageType, MessagesType} from "../state/state";
import {v1} from "uuid";

export const messagesPageReducer = (state: MessagesPageType, action: MessagesPageReducerType) => {
    switch (action.type) {
        case "add-message":
            let messageNew: MessagesType = {id: v1(), message: action.payload.title}
            return {...state, messageNew}
        case "add-new-friend":
            let friendNew: DialogsType = {
                id: v1(),
                name: action.payload.title,
                ava: 'http://proshloe.com/wp-content/uploads/2019/07/avatar_l.png'
            }
            return {...state, friendNew}
        default:
            return state;
    }
};
export type MessagesPageReducerType = addMessageACType | addFriendACType

type addMessageACType = ReturnType<typeof addMessageAC>
type addFriendACType = ReturnType<typeof addFriendAC>

export const addMessageAC = (title: string) => {
    return {
        type: "add-message",
        payload: {
            title
        }
    } as const
}
export const addFriendAC = (title: string) => {
    return {
        type: "add-new-friend",
        payload: {
            title
        }
    } as const
}