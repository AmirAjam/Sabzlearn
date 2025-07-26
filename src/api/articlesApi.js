import axios from "../api/axiosConfig"

const getArticles = async (userData) => {
    try {
        const response = await axios.get("/articles", userData)
        return response
    } catch (err) {
        return err.response
    }
}

export {getArticles }