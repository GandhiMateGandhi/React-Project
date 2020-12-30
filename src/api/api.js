import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aa1d7afd-2718-49c1-8b3b-83366cf45bb6"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageUsersCount = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageUsersCount}`)
        //     .then(response => {
        //     return response.data
        // })
    },

    unfollow(userId) {
        return instance.delete(`follow/` + userId)
            // .then(response => {
            //     return response.data
            // })
    },

    follow(userId) {
        return instance.post(`follow/` + userId)
            // .then(response => {
            //     return response.data
            // })
    },

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



