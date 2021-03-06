export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized:false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const);
export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const);
export const setAppIsInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZED', isInitialized} as const)

export type AppActionsType = SetAppStatusACType | SetErrorACType | SetAppIsInitializedACType
type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
type SetErrorACType = ReturnType<typeof setErrorAC>
type SetAppIsInitializedACType = ReturnType<typeof setAppIsInitializedAC>
