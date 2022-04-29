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
    users: UsersType[],
    currentPage: number,
    totalCount: number,
    fetch: boolean
}
const initialState = {
    users: [
        // {id:1, name: 'Viktor',photos:{ small: 'not', large:"NOT"}, status: 'HI, HOW ARE YOU', followed: false}
    ],
    currentPage: 1,
    totalCount: 0,
    fetch: false,
}


export const usersReducer = (state: InitialType = initialState, action: UsersActionsType): InitialType => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.items]}
        case "SET-FOLLOWS":
            return {
                ...state,
                users: state.users.map(f => f.id === action.userId ? {...f, followed: !action.follow} : f)
            }
        case "SET-SELECTOR":
            return {...state, currentPage: action.page}
        case "GET-TOTAL":
            return {...state, totalCount: action.totalCount}
        case "GET-FETCHING":
            return {...state, fetch: action.fetch}
        default:
            return state;
    }
};
export type UsersActionsType =
    SetUsersACType
    | FollowACType
    | SetSelectorACType
    | GetTotalCountACType
    | GetFetchingACType

type SetUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type SetSelectorACType = ReturnType<typeof setSelectorAC>
type GetTotalCountACType = ReturnType<typeof getTotalCountAC>
type GetFetchingACType = ReturnType<typeof getFetchingAC>

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
export const setSelectorAC = (page: number) => {
    return {
        type: 'SET-SELECTOR',
        page: page
    } as const
}
export const getTotalCountAC = (totalCount: number) => {
    return {
        type: 'GET-TOTAL',
        totalCount: totalCount
    } as const
}
export const getFetchingAC = (fetch: boolean) => {
    return {
        type: 'GET-FETCHING',
        fetch: fetch
    } as const
}

