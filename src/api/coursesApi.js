import axios from "../api/axiosConfig"

const getPopularCourses = async (userData) => {
    try {
        const response = await axios.get("/courses/popular", userData)
        return response
    } catch (err) {
        return err.response
    }
}

const getPresellCourses = async (userData) => {
    try {
        const response = await axios.get("/courses/presell", userData)
        return response
    } catch (err) {
        return err.response
    }
}

const getOneCourseDetail = async (courseName) => {
    try {
        const response = await axios.get(`/courses/${courseName}`)
        return response
    } catch (err) {
        return err.response
    }
}
export { getPopularCourses, getPresellCourses,getOneCourseDetail }