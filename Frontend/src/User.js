import axios from "axios"

//API CALLS
export const getUser = (userId) => {
return axios.get(`/user/${userId}`)
}

export const getUserActivity = (user_id) => {
return axios.get(`/user/${user_id}/activity`)

}

export const getUserSessions = (user_id) => {
return axios.get(`/user/${user_id}/average-sessions`)
}

export const getUserPerformance = (user_id) => {
return axios.get(`/user/${user_id}/performance`)
}
