import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;