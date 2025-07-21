import { StrictMode } from 'react'
import { ThemeProvider } from './Contexts/ThemeContext'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(
    <App />
)
