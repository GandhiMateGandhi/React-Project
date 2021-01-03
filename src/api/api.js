import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "22f29d98-87b4-4898-a75f-c433c157801d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageUsersCount = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageUsersCount}`)
    },

    follow(userId) {
        return instance.post(`follow/` + userId)
    },

    unfollow(userId) {
        return instance.delete(`follow/` + userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },

    logout() {
        return instance.delete(`auth/login`)
    },


}



