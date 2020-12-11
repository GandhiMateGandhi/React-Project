const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, text: 'How\'re you?', likesCount: 3},
        {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
        {id: 3, text: '*post*', likesCount: 13},
        {id: 4, text: 'Hello sweety!', likesCount: 6},
        {id: 5, text: '*picture*', likesCount: 22}
    ],
    newPostText: '123',
    userProfile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                text: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText,
            };
        }

        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }

        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})



export default profileReducer;