import * as React from "react";
import {Component} from "react";
import './Wrapper.scss'
import './App.css'
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import {Route, Switch} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Redirect} from "react-router";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const MessagesContainer = React.lazy(() => import ("./components/Messages/MessagesContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="Wrapper">
                <HeaderContainer/>
                <div className="PageContainer">
                    <Sidebar/>
                    <div className="Content">
                        <Switch>
                            <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/Main' render={() => <Main/>}/>
                            <Route path='/Messages' render={withSuspense(MessagesContainer)}/>
                            <Route path='/News' render={() => <News/>}/>
                            <Route path='/Users' render={withSuspense(UsersContainer)}/>
                            <Route path='/Settings' render={() => <Settings/>}/>
                            <Route path='/Login' render={() => <Login/>}/>
                            <Redirect from="/" to="/Profile"/>
                            <Route render={() => <Redirect from="/" to="/Profile"/>}/>
                        </Switch>
                    </div>
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
