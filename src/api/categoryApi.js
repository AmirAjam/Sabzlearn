import axios from "../api/axiosConfig"

const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODM0NDExNWMzZDliMzA1ODQyYWRkOSIsImlhdCI6MTc1MzQ1MTE5OCwiZXhwIjoxNzU2MDQzMTk4fQ.Br_zSl0Rd3n3iNdpP_MTS3nEuJhJRLPJZjr7ZqrvP9Y`
const getCategories = async () => {
    try {
        const response = await axios.get("/category")
        return response
    } catch (err) {
        return err.response
    }
}

export { getCategories }