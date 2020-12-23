import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authLogout, getAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getAuthUserData, authLogout})(HeaderContainer);