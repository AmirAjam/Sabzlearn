import { useRoutes } from "react-router-dom"
import routes from "./routes"
import { ThemeProvider } from './Contexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from "./Contexts/AuthContext"
import { useEffect, useState } from "react"
import { getUserData } from "./api/authApi"

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const login = (token) => {
    setIsLoggedIn(true)
    setToken(token)
    localStorage.setItem("userToken", JSON.stringify({ token }))
  }

  const logout = () => {
    setIsLoggedIn(false)
    setToken(null)
    localStorage.removeItem("userToken")
  }

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("userToken"))?.token
    if (userToken) {
      getUserData(userToken)
        .then(res => res.data)
        .then(userData => setUserInfo(userData))
    }
  }, [token])

  const AppRoutes = () => {
    const router = useRoutes(routes);
    return router;
  };

  return (
    <ThemeProvider>
      <AuthContext.Provider value={{
        isLoggedIn,
        token,
        userInfo,
        login,
        logout
      }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App