import API, {LoginType, MeType} from "../Redux/API";
import {AppThunk} from "../Redux/redux-store";
import {setAppIsInitializedAC, setAppStatusAC, setErrorAC} from "./appReducer";
import {getUserProfileTC, getUsersProfileAC} from "./profilePageReducer";
import {debounce} from "@mui/material";

export type DataInitialType = {
    data: MeType,
    isAuth: boolean
}

const initialState = {
    isAuth: false,
} as DataInitialType


export const authUsersReducer = (state: DataInitialType = initialState, action: LoginActionsType) => {
    switch (action.type) {
        case "SET-LOGIN-USERS":
            return {...state, isAuth: action.isAuth}
        case "GET-LOGIN-USER":
            return {...state, data: action.data}
        default:
            return state;
    }
};
export type LoginActionsType =
    setLoginUsersACType | GetLoginUserACType


type setLoginUsersACType = ReturnType<typeof setLoginUsersAC>
type GetLoginUserACType = ReturnType<typeof getLoginUserAC>

export const setLoginUsersAC = (isAuth: boolean) => ({
    type: 'SET-LOGIN-USERS',
    isAuth
} as const)
export const getLoginUserAC = (data: MeType) => ({
    type: 'GET-LOGIN-USER',
    data
} as const)

export const getLoginAuthUserTC = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const {data} = await API.authUser()
        const {resultCode} = data
        resultCode === 0 &&
        dispatch(getUserProfileTC(JSON.stringify(data.data.id)))
        dispatch(getLoginUserAC(data.data))
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(true))
    } catch (err) {
        console.log('Error with auth login user ', err)
    }
}
export const loginTC = (data: LoginType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await API.logIn(data)
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(true))
    } catch (err) {
        console.log(err)
    }
}
export const logOut = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        await API.logOut()
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(false))
    } catch (err) {
        console.log(err)
    }
};
