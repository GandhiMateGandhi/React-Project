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
            .then(response => {
            return response.data
        })
    },

    unfollow(userId) {
        return instance.delete(`/follow/` + userId)
            .then(response =>{
                return response.data
        })
    },

    follow(userId) {
        return instance.post(`/follow/` + userId)
            .then(response => {
                return response.data
            })
    },

    userProfile(userId) {
        return instance.get(`/profile/` + userId)
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
            .then(response =>{
                return response.data
            })
    }
}



