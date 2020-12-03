const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const messagesReducer = (state, action) => {

    let sendMessage = () => {
        let newMessage = {
            id: 6,
            text: state.messagesPage.newMessageBody
        };
        state.messagesPage.messagesData.push(newMessage);
        state.messagesPage.newMessageBody = '';
    }
    let updateNewMessageBody = (body) => {
        state.messagesPage.newMessageBody = body;
    }

    switch (action.type) {
        case SEND_MESSAGE:
            sendMessage();
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(action.body);
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messagesReducer;