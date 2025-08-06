import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToggleWrapper from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <div className="wrap">
    <ToggleWrapper />
  </div>

  // </StrictMode>,
)
