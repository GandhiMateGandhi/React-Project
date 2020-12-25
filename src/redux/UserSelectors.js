export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageUsersCount = (state) => {
    return state.usersPage.pageUsersCount
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

