import API from "../Redux/API";
import {AppThunk} from "../Redux/redux-store";
import {setAppStatusAC, setErrorAC} from "./appReducer";

export type DataInitialType = {
    id: number | null,
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
            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return state;
    }
};
export type LoginActionsType =
    setLoginUsersACType


type setLoginUsersACType = ReturnType<typeof setLoginUsersAC>

export const setLoginUsersAC = (data: DataInitialType, isAuth: boolean) => ({
    type: 'SET-LOGIN-USERS',
    data,
    isAuth
} as const)

export const getLoginAuthUserTC = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const {data} = await API.authUser()
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setLoginUsersAC(data.data, true))
    } catch (err) {
        console.log('Error with auth login user ', err)
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const {data} = await API.logIn(email, password, rememberMe)
        const {resultCode} = data
        dispatch(setAppStatusAC('succeeded'))
        resultCode === 0 ? dispatch(getLoginAuthUserTC()) : dispatch(setErrorAC('Incorrect Email or Password!'));
    } catch (er) {
        dispatch(setAppStatusAC('loading'))
        console.log(er)
    }
}
export const logOut = (): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
        const {data} = await API.logOut()
        const {resultCode} = data
        dispatch(setAppStatusAC('succeeded'))
        resultCode === 0 && dispatch(setLoginUsersAC(initialState, false))
    } catch (err) {
        dispatch(setAppStatusAC('loading'))
        console.log(err)
    }
};
