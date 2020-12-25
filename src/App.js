import './Wrapper.scss'
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import {Route} from "react-router-dom"
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/common/Loader/Loader";

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
                    <Route path='/Messages' render={() => <MessagesContainer store={this.props.store}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Users' render={() => <UsersContainer store={this.props.store}/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
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
