import './Messages.scss'

const Messages = () => {
    return (
        <div className="Messages">
            <div className="MessagesBar">
                <div className="MessagesBar-Item">
                    Kamilla
                </div>
                <div className="MessagesBar-Item">
                    Rustem
                </div>
                <div className="MessagesBar-Item">
                    Vildan
                </div>
                <div className="MessagesBar-Item">
                    Elvira
                </div>
                <div className="MessagesBar-Item">
                    Cafe De Garage
                </div>
                <div className="MessagesBar-Item">
                    IPOAS-108M
                </div>

            </div>
            <div className="MessagesList">
                <div className="MessagesList-Item">
                    Hi, how're you doing?
                </div>
                <div className="MessagesList-Item">
                    *Post*
                </div>
                <div className="MessagesList-Item">
                    I hate girls
                </div>
            </div>
        </div>
    );
}

export default Messages;