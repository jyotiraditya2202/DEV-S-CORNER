import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LogInForm from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    
    <LogInForm />

  </StrictMode>,
)
