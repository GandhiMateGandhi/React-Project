import './Messages.scss'
import './MessagesSidebar/MessagesSidebar.scss'
import MessagesSidebar from "./MessagesSidebar/MessagesSidebar";
import MessagesBody from "./MessagesBody/MessagesBody";
import {createRef} from "react";

const Messages = (props) => {

    let newMessage = createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let usersElement = props.state.usersData.map(user => <MessagesSidebar id={user.id} name={user.name}/>)

    let messagesElement = props.state.messagesData.map(message => <MessagesBody text={message.text}/>)

    return (
        <div className="Messages">
            <div className="MessagesSidebar">
                {usersElement}
            </div>

            <div className="MessagesBody">
                {messagesElement}

                <textarea ref={newMessage}/>
                <br/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
}

export default Messages;