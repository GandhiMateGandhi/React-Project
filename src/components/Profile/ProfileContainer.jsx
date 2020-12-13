import './Profile.scss'
import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13200
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile} />
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
}

let UrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(UrlContainerComponent);