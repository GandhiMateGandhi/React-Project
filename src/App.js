import './Wrapper.scss'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom"

const App = (props) => {


    return (
        <div className="Wrapper">
            <Header/>
            <Sidebar/>
            <div className="Content">
                <Route path='/Main' render={() => <Main/>}/>
                <Route path='/Messages' render={() => <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Photos' render={() => <Photos/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Profile'
                       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
