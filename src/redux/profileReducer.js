const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    let addPost = () => {
        let newPost = {
            id: 6,
            text: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.postsData.push(newPost);
        state.profilePage.newPostText = '';
    }
    let updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
    }

    switch (action.type) {
        case ADD_POST:
            addPost();
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newPostText);
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})


export default profileReducer;