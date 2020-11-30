import {renderTree} from "../render";

let state = {
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
}


export let addPost = () => {
    let newPost = {
        id: 6,
        text: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderTree(state);
}


export default state;