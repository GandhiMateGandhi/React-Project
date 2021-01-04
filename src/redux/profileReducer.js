import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';

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
                postsData: [{ id: null, text: action.newPostText, likesCount: 0 }, ...state.postsData],
            };
        }

        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }

        case SET_USER_PROFILE_STATUS: {
            return {...state, userProfileStatus: action.status}
        }

        case SET_PROFILE_PHOTO: {
            return {...state, userProfile: {...state.userProfile, photos: action.photos}}
        }

        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})
export const saveProfilePhotoSuccess = (photos) => ({type: SET_PROFILE_PHOTO, photos})

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

export const saveProfilePhoto = (photos) => async (dispatch) => {
       let response = await profileAPI.saveProfilePhoto(photos)
                if (response.data.resultCode === 0) {
                    dispatch(saveProfilePhotoSuccess(response.data.data.photos));
                }
    }

export default profileReducer;