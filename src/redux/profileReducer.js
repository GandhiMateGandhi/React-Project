import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    postsData: [
        {id: 1, text: 'How\'re you?', likesCount: 3},
        {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
        {id: 3, text: '*post*', likesCount: 13},
        {id: 4, text: 'Hello sweety!', likesCount: 6},
        {id: 5, text: '*picture*', likesCount: 22}
    ],
    userProfile: null,
    userProfileStatus: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, { id: 6, text: action.newPostText, likesCount: 0 }],
            };
        }

        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }

        case SET_USER_PROFILE_STATUS: {
            return {...state, userProfileStatus: action.status}
        }

        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
                dispatch(setUserProfile(response.data));
    }

export const getUserProfileStatus = (userId) => async (dispatch) => {
       let response = await profileAPI.getProfileStatus(userId)
                dispatch(setUserProfileStatus(response.data));
    }

export const updateUserProfileStatus = (status) => async (dispatch) => {
       let response = await profileAPI.updateProfileStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setUserProfileStatus(status));
                }
    }

export default profileReducer;