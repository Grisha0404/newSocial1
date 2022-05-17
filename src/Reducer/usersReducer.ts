import API from "../Redux/API";
import {AppThunk} from "../Redux/redux-store";
import {setAppStatusAC} from "./appReducer";

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
        default:
            return state;
    }
};
export const setUsersAC = (items: UsersType[]) => ({type: 'SET-USERS', items} as const)
export const followAC = (follow: boolean, userId: number) => ({type: 'SET-FOLLOWS', follow, userId} as const)
export const setSelectorAC = (page: number) => ({type: 'SET-SELECTOR', page} as const)
export const getTotalCountAC = (totalCount: number) => ({type: 'GET-TOTAL', totalCount} as const)
export const getUsersTC = (currentPage: number): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await API.usersFriends(currentPage)
        dispatch(getTotalCountAC(res.data.totalCount))
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setUsersAC(res.data.items))
    } catch (err) {
        dispatch(setAppStatusAC('loading'))
        console.log('Error with get users ', err)
    }
}
export const followUserTC = (follow: boolean, id: number): AppThunk => (dispatch) => {
    if (follow) {
        API.unFollowUsers(id).catch((err) => {
            console.log('Error with unFollow user ', err)
        })
        dispatch(followAC(follow, id))
    } else {
        API.followUsers(id).catch((err) => {
            console.log('Error with follow user ', err)
        })
        dispatch(followAC(follow, id))
    }
}

//Type
export type UsersActionsType =
    SetUsersACType
    | FollowACType
    | SetSelectorACType
    | GetTotalCountACType
type SetUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type SetSelectorACType = ReturnType<typeof setSelectorAC>
type GetTotalCountACType = ReturnType<typeof getTotalCountAC>
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
    currentPage: number,
    totalCount: number,
    fetch: boolean
}