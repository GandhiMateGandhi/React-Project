import './Messages.scss'
import './MessagesSidebar/MessagesSidebar.scss'
import MessagesSidebar from "./MessagesSidebar/MessagesSidebar";
import MessagesBody from "./MessagesBody/MessagesBody";
import {createRef} from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";

const Messages = (props) => {

    let usersElement = props.messagesPage.usersData.map(user => <MessagesSidebar id={user.id} name={user.name}/>)

    let messagesElement = props.messagesPage.messagesData.map(message => <MessagesBody text={message.text}/>)

    let newMessageBody = props.messagesPage.newMessageBody;

    let newMessage = createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = () => {
        let body = newMessage.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }



    return (
        <div className="Messages">
            <div className="MessagesSidebar">
                {usersElement}
            </div>

            <div className="MessagesBody">
                {messagesElement}

                <textarea placeholder='Type your message' ref={newMessage} onChange={onMessageChange} value={newMessageBody}/>
                <br/>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default Messages;