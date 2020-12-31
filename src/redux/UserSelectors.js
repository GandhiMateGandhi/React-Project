export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersCountPerPage = (state) => {
    return state.usersPage.usersCountPerPage
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

