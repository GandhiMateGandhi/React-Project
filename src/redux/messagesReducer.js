const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, text: action.newMessageBody}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default messagesReducer;