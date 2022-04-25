
import {UsersType} from "../Friends/Friends";


export type InitialType = {
    users: UsersType[]
}
const initialState:InitialType = {
    users:[
        // {id:1, name: 'Viktor',photos:{ small: 'not', large:"NOT"}, status: 'HI, HOW ARE YOU', followed: false}
    ]
}

export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.users]}
        default:
            return state;
    }
};
export type UsersActionsType = SetUsersACType

type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) =>{
    return {
        type:'SET-USERS',
        users: users
    }as const
}

