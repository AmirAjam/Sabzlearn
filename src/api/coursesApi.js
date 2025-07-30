import axios from "../api/axiosConfig"

const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODM0NDExNWMzZDliMzA1ODQyYWRkOSIsImlhdCI6MTc1MzQ1MTE5OCwiZXhwIjoxNzU2MDQzMTk4fQ.Br_zSl0Rd3n3iNdpP_MTS3nEuJhJRLPJZjr7ZqrvP9Y`


const getAllCourses = async () => {
    try {
        const response = await axios.get("/courses")
        return response
    } catch (err) {
        return err.response
    }
}

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

const deleteCourse = async (courseID) => {
    try {
        const response = await axios.delete(`courses/${courseID}`, {
            headers: {
                Authorization: token
            }
        })
        return response
    } catch (err) {
        return err.response
    }
}

export { getPopularCourses, getPresellCourses,getOneCourseDetail,getAllCourses,deleteCourse }