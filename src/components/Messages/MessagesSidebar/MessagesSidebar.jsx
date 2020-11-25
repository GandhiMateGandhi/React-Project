import {NavLink} from "react-router-dom";
import './MessagesSidebar.scss'


const MessagesSidebar = ({id, name}) => {
    let path = "/Messages/" + id
    return (
        <div className="MessagesSidebar-Item">
            <NavLink exact to={path}> {name}</NavLink>
        </div>
    )
}

export default MessagesSidebar;