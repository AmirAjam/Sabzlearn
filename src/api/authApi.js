import axios from "../api/axiosConfig"

const registerUser = async (userData) => {
    try {
        const response = await axios.post("/auth/register", userData)
        return response.status
    } catch (err) {
        return err.response.status
    }
}

const loginUser = async (userData) => {
    try {
        const response = await axios.post("/auth/login", userData)
        return response
    } catch (err) {
        return err.response
    }
}

const getUserData = async (token) => {
    try {
        const response = await axios.get(
            "/auth/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response
    } catch (err) {
        return err.response
    }
}

export { registerUser, loginUser, getUserData }
