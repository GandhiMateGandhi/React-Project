import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

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
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsData: [
                {id: 1, text: 'How\'re you?', likesCount: 3},
                {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
                {id: 3, text: '*post*', likesCount: 13},
                {id: 4, text: 'Hello sweety!', likesCount: 6},
                {id: 5, text: '*picture*', likesCount: 22}
            ],
            newPostText: ''
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

    dispatch(action) {
        this._state = profileReducer(this._state, action);
        this._state = messagesReducer(this._state, action);

        this._callSubscriber(this._state)
    }
}
window.state = store.getState();

export default store;