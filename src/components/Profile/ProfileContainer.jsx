import './Profile.scss'
import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserProfileStatus,
    saveProfilePhoto,
    updateUserProfileStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/Login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        updateStatus={this.props.updateUserProfileStatus}
                        savePhoto={this.props.saveProfilePhoto}/>
    }
}


let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userProfileStatus: state.profilePage.userProfileStatus,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserProfileStatus, updateUserProfileStatus, saveProfilePhoto }),
    withRouter
)
(ProfileContainer)

