const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, text: 'How\'re you?', likesCount: 3},
        {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
        {id: 3, text: '*post*', likesCount: 13},
        {id: 4, text: 'Hello sweety!', likesCount: 6},
        {id: 5, text: '*picture*', likesCount: 22}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    let addPost = () => {
        let newPost = {
            id: 6,
            text: state.newPostText,
            likesCount: 0
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    }
    let updateNewPostText = (newText) => {
        state.newPostText = newText;
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