import {getAuthUserData} from "./authReducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export const initializationComplete = () => ({ type: INITIALIZED });

export const initializeApp = () =>
    (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializationComplete())
            });

    }

export default appReducer;