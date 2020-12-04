import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Messages sendMessage={sendMessage}
                  onMessageChange={onMessageChange}
                  usersData={state.messagesPage.usersData}
                  messagesData={state.messagesPage.messagesData}
                  newMessageBody={state.messagesPage.newMessageBody}/>
    );
}

export default MessagesContainer;