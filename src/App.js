import * as React from "react";
import './Wrapper.scss'
import './App.css'
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import {Route} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/common/Loader/Loader";
import {withSuspense} from "./hoc/withSuspense";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const MessagesContainer = React.lazy(() => import ("./components/Messages/MessagesContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader />
        }
        return (
            <div className="Wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="Content">
                    <Route path='/Main' render={() => <Main/>}/>
                    <Route path='/Messages' render={withSuspense(MessagesContainer)}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Users' render={withSuspense(UsersContainer)}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
                    <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
}
)
export default connect(mapStateToProps, { initializeApp })(App);
