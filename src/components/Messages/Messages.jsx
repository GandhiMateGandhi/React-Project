import './Messages.scss'
import './MessagesSidebar/MessagesSidebar.scss'
import MessagesSidebar from "./MessagesSidebar/MessagesSidebar";
import MessagesBody from "./MessagesBody/MessagesBody";
import * as React from "react";
import {Field, reduxForm} from 'redux-form';


const Messages = (props) => {
    let usersElement = props.usersData.map(user => <MessagesSidebar id={user.id} name={user.name} key={user.id}/>)
    let messagesElement = props.messagesData.map(message => <MessagesBody text={message.text} key={message.id}/>)

    let sendMessage = (messageData) => {
        props.sendMessage(messageData.newMessageBody);
    }

    return (
        <div className="Messages">
            <div className="MessagesSidebar">
                {usersElement}
            </div>

            <div className="MessagesBody">
                {messagesElement}

                <SendMessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

const SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody" component="input" type="text" placeholder="Type your message"/>
            <button type="submit">Send Message</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'sendMessage'})(SendMessage)

export default Messages;