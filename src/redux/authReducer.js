import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'


let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});

export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } });



export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Incorrect login data";
        dispatch(stopSubmit("login", { _error: errorMessage }))
    }
}

export const authLogout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
        dispatch(setCaptchaUrl(captchaUrl));
}

export default authReducer;