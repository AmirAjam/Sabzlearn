import axios from "../api/axiosConfig"

const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODM0NDExNWMzZDliMzA1ODQyYWRkOSIsImlhdCI6MTc1MzQ1MTE5OCwiZXhwIjoxNzU2MDQzMTk4fQ.Br_zSl0Rd3n3iNdpP_MTS3nEuJhJRLPJZjr7ZqrvP9Y`

const getAllUsers = async () => {
    try {
        const response = await axios.get("/users", {
            headers: {
                Authorization: token
            }
        })
        return response
    } catch (err) {
        return err.response
    }
}

const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`users/${userId}`, {
            headers: {
                Authorization: token
            }
        })
        return response
    } catch (err) {
        return err.response
    }
}

const changeUserRole = async (id, role) => {
    try {
        const response = await axios.put(
            "/users/role",
            new URLSearchParams({ id: id, role: role }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: token
                }
            }
        )
        return response
    } catch (err) {
        return err.response
    }
}

export { getAllUsers, deleteUser, changeUserRole }
