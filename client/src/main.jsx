import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LogInForm from './pages/login/Login.jsx'
import Dashboard from './pages/DashboardProject/DashboardProject.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <Dashboard />
  </StrictMode>
)
