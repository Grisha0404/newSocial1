export type DataInitialType = {
    id?: number | null,
    login: string | null,
    email: string | null,
}

const initialState = {
    id: null,
    login: null,
    email: null,
}


export const authUsersReducer = (state: DataInitialType = initialState, action: LoginActionsType) => {
    switch (action.type) {
        case "SET-LOGIN-USERS":

            return {...state, ...action.data}
        default:
            return state;
    }
};
export type LoginActionsType =
    setLoginUsersACType


type setLoginUsersACType = ReturnType<typeof setLoginUsersAC>

export const setLoginUsersAC = (data:DataInitialType) => {
    return {
        type: 'SET-LOGIN-USERS',
        data:data
    } as const
}

