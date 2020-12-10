import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageUsersCount: state.usersPage.pageUsersCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);


export default UsersContainer;
