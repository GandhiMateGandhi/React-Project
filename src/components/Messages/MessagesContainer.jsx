import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let MapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        messagesData: state.messagesPage.messagesData,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
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

export default compose(
    withAuthRedirect,
    connect(MapStateToProps, MapDispatchToProps)
)(Messages)
