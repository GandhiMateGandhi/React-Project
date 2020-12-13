import {connect} from "react-redux";
import Users from "./Users";
import {withRouter} from "react-router";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
} from "../../redux/usersReducer";
import * as axios from "axios";
import * as React from "react";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersCount}`,
            {
                withCredentials: true
            }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersCount}`,
            {
                withCredentials: true
            }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
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

let UrlContainerComponent = withRouter(UsersContainer);

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        toggleIsFetching
    })
(UrlContainerComponent);

