import API, {LoginType} from "../Redux/API";
import {AppThunk} from "../Redux/redux-store";
import {setAppIsInitializedAC, setAppStatusAC, setErrorAC} from "./appReducer";
import {getUserProfileTC} from "./profilePageReducer";

export type DataInitialType = {
    id: string | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
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
            return {...state, isAuth: action.isAuth}
        default:
            return state;
    }
};
export type LoginActionsType =
    setLoginUsersACType


type setLoginUsersACType = ReturnType<typeof setLoginUsersAC>

export const setLoginUsersAC = (isAuth: boolean) => ({
    type: 'SET-LOGIN-USERS',
    isAuth
} as const)

export const getLoginAuthUserTC = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const {data} = await API.authUser()
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(true))
        //@ts-ignore
        dispatch(getUserProfileTC(data.data.id))
    } catch (err) {
        console.log('Error with auth login user ', err)
    }
}
export const loginTC = (data: LoginType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await API.logIn(data)
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(true))
    } catch (err) {
        console.log(err)
    }
}
export const logOut = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await API.logOut()
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(false))
    } catch (err) {
        console.log(err)
    }
};
