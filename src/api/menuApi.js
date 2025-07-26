import axios from "../api/axiosConfig"

const getMenus = async (userData) => {
    try {
        const response = await axios.get("/menus", userData)
        return response
    } catch (err) {
        return err.response
    }
}

export {getMenus}