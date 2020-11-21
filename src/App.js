import './Wrapper.scss'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from "./components/Messages/Messages";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='Wrapper'>
                <Header/>
                <Sidebar/>
                <div className="Content">
                    {/*<Route path={'/SideItem.item'} component={SideItem.item}/>*/}
                    <Route path='/Main' component={Main}/>
                    <Route path='/Messages' component={Messages}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Photos' component={Photos}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
