import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4a19455c-2151-4bb0-938d-b23058812407'
    }
});


//DAL - Data Access Layer
export const userApi = {
    //метод объекта
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {})
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
        },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
/*            .then(response => {
                return response.data;
            });
    }*/
}