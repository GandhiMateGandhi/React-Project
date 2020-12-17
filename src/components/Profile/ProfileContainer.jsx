import './Profile.scss'
import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
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
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}


let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)
(ProfileContainer)

