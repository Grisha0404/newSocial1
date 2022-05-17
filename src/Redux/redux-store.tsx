import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer, ProfilePageReducerType} from "../Reducer/profilePageReducer";
import {dialogsPageReducer, MessagesPageReducerType} from "../Reducer/dialogsPageReducer";
import {UsersActionsType, usersReducer} from "../Reducer/usersReducer";
import {authUsersReducer, LoginActionsType} from "../Reducer/authUsersReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionsType, appReducer} from "../Reducer/appReducer";


let rootReducer = combineReducers({//сюда поместим все редьюсеры
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    users: usersReducer,
    login: authUsersReducer,
    app: appReducer,
});

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));

export  type ActionType =
    UsersActionsType
    | ProfilePageReducerType
    | MessagesPageReducerType
    | LoginActionsType
    | AppActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionType>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;