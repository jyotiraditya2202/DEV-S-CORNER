import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LogInForm from './pages/login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <LogInForm />
  </StrictMode>
)
