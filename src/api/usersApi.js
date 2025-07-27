import axios from "../api/axiosConfig"

const getAllUsers = async () => {
    try {
        const response = await axios.get(
            "/users",
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODM0NDExNWMzZDliMzA1ODQyYWRkOSIsImlhdCI6MTc1MzQ1MTE5OCwiZXhwIjoxNzU2MDQzMTk4fQ.Br_zSl0Rd3n3iNdpP_MTS3nEuJhJRLPJZjr7ZqrvP9Y`
                }
            }
        )
        return response
    } catch (err) {
        return err.response
    }
}
const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(
            `users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODM0NDExNWMzZDliMzA1ODQyYWRkOSIsImlhdCI6MTc1MzQ1MTE5OCwiZXhwIjoxNzU2MDQzMTk4fQ.Br_zSl0Rd3n3iNdpP_MTS3nEuJhJRLPJZjr7ZqrvP9Y`
                }
            }
        )
        return response
    } catch (err) {
        return err.response
    }
}


export {getAllUsers}
