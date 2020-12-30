import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageUsersCount: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsers}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestUsers = (currentPage, pageUsersCount) => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageUsersCount)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
    }

export const follow = (userId) => async (dispatch) => {
        let response = await usersAPI.follow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
    }

export const unfollow = (userId) => async (dispatch) => {
        let response = await usersAPI.unfollow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
    }



export default usersReducer;