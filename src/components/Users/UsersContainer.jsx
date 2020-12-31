import {connect} from "react-redux";
import Users from "./Users";
import {withRouter} from "react-router";
import {follow, requestUsers, setCurrentPage, unfollow,} from "../../redux/usersReducer";
import * as React from "react";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getUsersCountPerPage,
    getTotalUsersCount,
    getUsers
} from "../../redux/UserSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageUsersCount);

    }

    onPageChange = (page) => {

        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageUsersCount);

    }

    render() {
        return <Users users={this.props.users}
                      usersCountPerPage={this.props.usersCountPerPage}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      isFetching={this.props.isFetching}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        usersCountPerPage: getUsersCountPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps,
        { follow, unfollow, setCurrentPage, requestUsers }),
    withRouter
)
(UsersContainer)

