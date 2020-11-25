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
                    <Route path='/Main' component={Main} />
                    <Route path='/Messages' component={Messages} />
                    <Route path='/News' component={News} />
                    <Route path='/Photos' component={Photos} />
                    <Route path='/Settings' component={Settings} />
                    <Route path='/Profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
