import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        messagesData: state.messagesPage.messagesData,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}

const MessagesContainer = connect(MapStateToProps, MapDispatchToProps)(Messages);


export default MessagesContainer;
