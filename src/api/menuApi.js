import axios from "../api/axiosConfig"

const getMenus = async () => {
    try {
        const response = await axios.get("/menus")
        return response
    } catch (err) {
        return err.response
    }
}

export {getMenus}