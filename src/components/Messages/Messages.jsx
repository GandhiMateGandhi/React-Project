import './Messages.scss'
import {NavLink} from "react-router-dom";


const MessagesBarItem = ({user, name}) => {
    let path = "/Messages/" + user
    return (
        <div className="MessagesBar-Item">
            <NavLink to={path}> {name}</NavLink>

        </div>
    )
}

const MessagesListItem = ({text}) => {
    return (
        <div className="MessagesList-Item">
            {text}
        </div>
    )
}

const Messages = () => {

    let usersData = [
        {user: 1, name: 'Kamilla'},
        {user: 2, name: 'Vildan'},
        {user: 3, name: 'Rustem'},
        {user: 4, name: 'Elvira'},
        {user: 5, name: 'Cafe'}
    ]

    let messagesData = [
        {user: 1, text: 'How\'re you'},
        {user: 2, text: 'Let\'s do party tonight!'},
        {user: 3, text: '*post*'},
        {user: 4, text: 'Hello sweety!'},
        {user: 5, text: '*picture*'}
    ]

    return (
        <div className="Messages">
            <div className="MessagesBar">

                <MessagesBarItem name={usersData[0].name} user={usersData[0].user}/>
                <MessagesBarItem name={usersData[1].name} user={usersData[1].user}/>
                <MessagesBarItem name={usersData[2].name} user={usersData[2].user}/>
                <MessagesBarItem name={usersData[3].name} user={usersData[3].user}/>
                <MessagesBarItem name={usersData[4].name} user={usersData[4].user}/>

            </div>

            <div className="MessagesList">

                <MessagesListItem text={messagesData[0].text}/>
                <MessagesListItem text={messagesData[1].text}/>
                <MessagesListItem text={messagesData[2].text}/>
                <MessagesListItem text={messagesData[3].text}/>
                <MessagesListItem text={messagesData[4].text}/>
            </div>
        </div>
    );
}

export default Messages;