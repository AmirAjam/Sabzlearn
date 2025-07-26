import { createContext } from 'react'

const AuthContext = createContext({
    isLoggedin:false,
    token:null,
    userInfo:null,
    login: () => {},
    logout: () => {}
}) 

export default AuthContext