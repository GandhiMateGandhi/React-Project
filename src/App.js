import './Wrapper.scss'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="Wrapper">
                <Header />
                <Sidebar />
                <div className="Content">
                    <Route exact path='/Main' component={Main} />
                    <Route exact path='/Messages' component={Messages} />
                    <Route exact path='/News' component={News} />
                    <Route exact path='/Photos' component={Photos} />
                    <Route exact path='/Settings' component={Settings} />
                    <Route exact path='/Profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
