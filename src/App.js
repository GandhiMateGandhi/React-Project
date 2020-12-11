import './Wrapper.scss'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom"
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {


    return (
        <div className="Wrapper">
            <Header/>
            <Sidebar/>
            <div className="Content">
                <Route path='/Main' render={() => <Main/>}/>
                <Route path='/Messages' render={() => <MessagesContainer store={props.store}/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Users' render={() => <UsersContainer store={props.store}/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Profile' render={() => <ProfileContainer store={props.store}/>}/>
            </div>
        </div>
    );
}

export default App;
