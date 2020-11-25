import './Messages.scss'
import './MessagesSidebar/MessagesSidebar.scss'
import MessagesSidebar from "./MessagesSidebar/MessagesSidebar";
import MessagesBody from "./MessagesBody/MessagesBody";

const Messages = () => {

    let usersData = [
        {id: 1, name: 'Kamilla'},
        {id: 2, name: 'Vildan'},
        {id: 3, name: 'Rustem'},
        {id: 4, name: 'Elvira'},
        {id: 5, name: 'Cafe'}
    ]

    let messagesData = [
        {id: 1, text: 'How\'re you'},
        {id: 2, text: 'Let\'s do party tonight!'},
        {id: 3, text: '*post*'},
        {id: 4, text: 'Hello sweety!'},
        {id: 5, text: '*picture*'}
    ]

    let usersElement = usersData.map(user => <MessagesSidebar id={user.id} name={user.name}/>)

    let messagesElement = messagesData.map(message => <MessagesBody text={message.text}/>)

    return (
        <div className="Messages">
            <div className="MessagesSidebar">
                {usersElement}
            </div>

            <div className="MessagesBody">
                {messagesElement}
            </div>
        </div>
    );
}

export default Messages;