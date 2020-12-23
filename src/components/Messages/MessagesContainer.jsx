import {sendMessageActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        messagesData: state.messagesPage.messagesData,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Messages)
