import * as React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}
        ).then(response => {
            if (response.data.resultCode === 0) {
                // let {email, id, login} = response.data.data;
                this.props.setAuthUserData(response.data.data);
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);