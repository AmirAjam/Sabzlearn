import { useRoutes } from "react-router-dom"
import routes from "./routes"
import { ThemeProvider } from './Contexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    
  const AppRoutes = () => {
    const router = useRoutes(routes);
    return router;
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App