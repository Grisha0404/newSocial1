import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "../Reducer/profilePageReducer";
import {dialogsPageReducer} from "../Reducer/dialogsPageReducer";
import {usersReducer} from "../Reducer/usersReducer";
import {authUsersReducer} from "../Reducer/authUsersReducer";


let rootReducer = combineReducers({//сюда поместим все редьюсеры
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    users: usersReducer,
    login: authUsersReducer
});

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;