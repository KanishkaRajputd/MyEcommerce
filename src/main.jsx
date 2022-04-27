import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { CartContextProvider } from './Contexts/Cartcontext'
import { ThemeContextProvider } from './Contexts/ThemeContext'
import { AuthContextProvider } from './Contexts/loginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <CartContextProvider>
      <ThemeContextProvider>
    <BrowserRouter>
    
        <App/>
   
    </BrowserRouter>
    </ThemeContextProvider>
    </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
