
export type UsersType = {
    id: number,
    name: string,
    photos: {
        small: string,
        large: string,
    }
    status: string,
    followed: boolean
}

export type InitialType = {
    users: UsersType[]
}
const initialState: InitialType = {
    users: [
        // {id:1, name: 'Viktor',photos:{ small: 'not', large:"NOT"}, status: 'HI, HOW ARE YOU', followed: false}
    ]
}


export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.items]}
        case "SET-FOLLOWS":
            return {
                ...state,
                users: state.users.map(f => f.id === action.userId ? {...f, followed: !action.follow} : f)
            }
        default:
            return state;
    }
};
export type UsersActionsType = SetUsersACType | FollowACType

type SetUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>

export const setUsersAC = (items: UsersType[]) => {
    return {
        type: 'SET-USERS',
        items: items
    } as const
}
export const followAC = (follow: boolean, userId: number) => {
    return {
        type: 'SET-FOLLOWS',
        follow: follow,
        userId: userId
    } as const
}

