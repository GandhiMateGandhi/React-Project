const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

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
    ],
    newMessageBody: '123123'
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                text: state.newMessageBody
            };
            debugger
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ''
            };

        }

        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newMessageBody
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body})

export default messagesReducer;