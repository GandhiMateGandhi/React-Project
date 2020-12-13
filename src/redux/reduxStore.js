import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;