const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        messagesPage: {
            usersData: [
                {id: 1, name: 'Kamilla'},
                {id: 2, name: 'Vildan'},
                {id: 3, name: 'Rustem'},
                {id: 4, name: 'Elvira'},
                {id: 5, name: 'Cafe'}
            ],
            messagesData: [
                {id: 1, text: 'How\'re you'},
                {id: 2, text: 'Let\'s do party tonight!'},
                {id: 3, text: '*post*'},
                {id: 4, text: 'Hello sweety!'},
                {id: 5, text: '*picture*'}
            ]
        },
        profilePage: {
            postsData: [
                {id: 1, text: 'How\'re you?', likesCount: 3},
                {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
                {id: 3, text: '*post*', likesCount: 13},
                {id: 4, text: 'Hello sweety!', likesCount: 6},
                {id: 5, text: '*picture*', likesCount: 22}
            ],
            newPostText: 'GandhiMateGandhi'
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        let newPost = {
            id: 6,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newPostText);
                break
        }
    }
}
window.state = store.getState();

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default store;