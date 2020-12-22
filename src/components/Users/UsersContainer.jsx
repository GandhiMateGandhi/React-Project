import {connect} from "react-redux";
import Users from "./Users";
import {withRouter} from "react-router";
import {follow, getUsers, setCurrentPage, unfollow,} from "../../redux/usersReducer";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageUsersCount);

    }

    onPageChange = (page) => {

        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageUsersCount);

    }

    render() {
        return <Users users={this.props.users}
                      pageUsersCount={this.props.pageUsersCount}
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
        users: state.usersPage.users,
        pageUsersCount: state.usersPage.pageUsersCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    withRouter
)
(UsersContainer)

