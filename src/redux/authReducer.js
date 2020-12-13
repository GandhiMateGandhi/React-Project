const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    auth: {
        email: null,
        id: null,
        login: null,
        isAuth: false
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userData) => ({type: SET_USER_DATA, userData});

export default authReducer;