import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducers";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

//склеиваем reducer's в одну пачку
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

//передаем reducers нашему store
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;