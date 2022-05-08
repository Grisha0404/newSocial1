import {Dispatch} from "redux";
import API from "../Redux/API";
import {AppThunk} from "../Redux/redux-store";

export type DataInitialType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth:boolean
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


export const authUsersReducer = (state: DataInitialType = initialState, action: LoginActionsType) => {
    switch (action.type) {
        case "SET-LOGIN-USERS":
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
};
export type LoginActionsType =
    setLoginUsersACType


type setLoginUsersACType = ReturnType<typeof setLoginUsersAC>

export const setLoginUsersAC = (data: DataInitialType) => ({type: 'SET-LOGIN-USERS', data} as const)

export const getLoginAuthUserTC = (): AppThunk => async dispatch => {
    try {
        const {data} = await API.authUser()
        const {resultCode} = data
        resultCode === 0 ?
            dispatch(setLoginUsersAC(data.data))
            : console.log('Error with auth login user ', data.messages)
    } catch (err) {
        console.log('Error with auth login user ', err)
    }
}
