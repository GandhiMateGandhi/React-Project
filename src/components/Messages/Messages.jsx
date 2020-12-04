import './Messages.scss'
import './MessagesSidebar/MessagesSidebar.scss'
import MessagesSidebar from "./MessagesSidebar/MessagesSidebar";
import MessagesBody from "./MessagesBody/MessagesBody";
import {createRef} from "react";

const Messages = (props) => {

    let usersElement = props.usersData.map(user => <MessagesSidebar id={user.id} name={user.name}/>)

    let messagesElement = props.messagesData.map(message => <MessagesBody text={message.text}/>)

    let newMessageBody = props.newMessageBody;

    let newMessage = createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let body = newMessage.current.value;
        props.onMessageChange(body);
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