import './Profile.scss'
import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserProfileStatus, updateUserProfileStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13200
        }
        this.props.getUserProfile(userId);
        this.props.getUserProfileStatus(userId);
    }

    render() {
        return <Profile {...this.props} updateStatus={this.props.updateUserProfileStatus}/>
    }
}


let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userProfileStatus: state.profilePage.userProfileStatus,

    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserProfileStatus, updateUserProfileStatus}),
    withRouter
)
(ProfileContainer)

